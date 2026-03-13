<template>
  <div>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <BaseLabel for="name">Nome</BaseLabel>
        <BaseInput v-model="name" id="name" type="text" autocomplete="name"
          required autofocus />
      </div>
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
      <div class="mb-4">
        <BaseLabel for="password_confirmation">Confirmar Senha</BaseLabel>
        <BaseInput v-model="password_confirmation" id="password_confirmation" type="password" autocomplete="current-password"
          required />
      </div>
      <BaseButton type="submit" variant="secondary">
        Cadastrar
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import api from '../../services/api';
    import { userAuthStore } from '../../store/auth';
    import { useToast } from 'vue-toastification'

    const name                  = ref('');
    const email                 = ref('');
    const password              = ref('');
    const password_confirmation = ref('');
    const errorMessage          = ref('');

    const auth  = userAuthStore();
    const toast = useToast()

    const submit = async () => {
        try {
          const { data } = await api.post('/register', {
              name: name.value,
              email: email.value,
              password: password.value,
              password_confirmation: password_confirmation.value,
          });

          auth.setUser(data.user);
          window.location.href = '/dashboard';
        } catch (error) {
          errorMessage.value = error.response?.data?.message;
          toast.error(errorMessage.value);
        }
    };
</script>