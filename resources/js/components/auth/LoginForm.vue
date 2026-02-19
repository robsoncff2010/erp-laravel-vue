<template>
  <div>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <BaseLabel for="email">E-mail</BaseLabel>
        <BaseInput v-model="email" id="email" type="email" autocomplete="email"
          required autofocus />
      </div>
      <div class="mb-4">
        <BaseLabel for="password">Senha</BaseLabel>
        <BaseInput v-model="password" id="password" type="password" autocomplete="current-password"
          required />
      </div>

      <div class="flex items-center justify-between mb-4">
        <BaseLabel for="remember" class="flex items-center text-sm">
          <BaseInput id="remember" type="checkbox" autocomplete="off"/>
          <span class="ml-2">Lembrar-me</span>
        </BaseLabel>
        <a href="/forgot-password" class="text-sm text-indigo-400 hover:text-indigo-300">
          Não lembro a senha?
        </a>
      </div>
      <BaseButton type="submit" variant="secondary">
        Entrar
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import api from '../../services/api';
    import { userAuthStore } from '../../store/auth';
    import { useToast } from 'vue-toastification'

    const email        = ref('');
    const password     = ref('');
    const remember     = ref(false);
    const errorMessage = ref('');

    const auth  = userAuthStore();
    const toast = useToast()

    const submit = async () => {
        try {
          const { data } = await api.post('/login', {
              email: email.value,
              password: password.value,
              remember: remember.value,
          });

          auth.setUser(data.user);
          window.location.href = '/dashboard';
        } catch (error) {
          errorMessage.value = error.response?.data?.message;
          toast.error(errorMessage.value);
        }
    };
</script>
