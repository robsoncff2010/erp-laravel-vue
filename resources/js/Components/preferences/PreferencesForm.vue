<script setup>
  import { ref } from 'vue'
  import { switchTheme, switchLanguage } from '../../services/preferences.js'
  import { useToast } from 'vue-toastification'
  import { useI18n } from 'vue-i18n'

  const toast         = useToast()
  const darkMode      = ref(localStorage.getItem('theme') === 'dark')
  const { t, locale } = useI18n()

  async function handleTheme() {
    try {
      const { data } = await switchTheme(darkMode.value ? 'dark' : 'light')
      
      if (data.success) {
        localStorage.setItem('theme', data.data.theme)
        document.documentElement.classList.toggle('dark', data.data.theme === 'dark')

        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Falha na requisição', error)
    }
  }

  async function handleLanguage(lang) {
    try {
      const { data } = await switchLanguage(lang)
      
      if (data.success) {
        localStorage.setItem('locale', data.data.locale)

        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Falha na requisição', error)
    }
  }
</script>

<template>
  <div class="flex space-x-6 items-center">
    <BaseLabel for="theme" class="flex items-center space-x-2">
      <span>{{ $t('theme') }} : {{ darkMode ? $t('dark') : $t('light') }}</span>
      <BaseToggle id="theme" v-model="darkMode" @click="handleTheme" />
    </BaseLabel>

    <BaseLabel for="language" class="flex items-center space-x-2">
      <span>|</span>
    </BaseLabel>
    
    <BaseDropdown
      v-model="locale"
      :options="[
        { value: 'pt', label: $t('portuguese') },
        { value: 'en', label: $t('english') }
      ]"
      @update:modelValue="val => handleLanguage(val)"
      
    />
  </div>
</template>