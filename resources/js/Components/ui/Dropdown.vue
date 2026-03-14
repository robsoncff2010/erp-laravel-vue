<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <button
      @click="open = !open"
      class="inline-flex justify-between w-full rounded-lg border border-gray-300
             bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium
             text-gray-700 dark:text-gray-300 shadow-sm focus:outline-none"
    >
      {{ selectedLabel }}
      <svg class="h-5 w-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-if="open" class="absolute mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
      <ul class="py-1">
        <li v-for="option in options" :key="option.value">
          <button
            @click="select(option)"
            class="block w-full text-left px-4 py-2 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {{ option.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

  const props = defineProps({
    modelValue: String,
    options: { type: Array, required: true }
  })

  const emit        = defineEmits(['update:modelValue'])
  const open        = ref(false)
  const dropdownRef = ref(null)

  const selectedLabel = computed(() => {
    const opt = props.options.find(o => o.value === props.modelValue)
    return opt ? opt.label : 'Selecione...'
  })

  function select(option) {
    emit('update:modelValue', option.value)
    open.value = false
  }

  // fecha se clicar fora
  function handleClickOutside(event) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      open.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
</script>