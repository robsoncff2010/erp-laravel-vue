import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import LoginForm from './components/auth/LoginForm.vue';
import HomeForm from './components/home/HomeForm.vue';
import Button from './components/ui/Button.vue';
import Label from './components/ui/Label.vue';
import Input from './components/ui/Input.vue';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp({});
app.use(createPinia());
app.component('login-form', LoginForm);
app.component('home-form', HomeForm);
app.component('BaseButton', Button);
app.component('BaseLabel', Label);
app.component('BaseInput', Input);
app.use(Toast, {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
})

app.mount('#app');