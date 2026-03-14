import { createApp } from 'vue';
import { setupApp } from '../../app';
import LoginPage from '../../views/auth/LoginPage.vue';

const app = createApp(LoginPage);
setupApp(app);
app.mount('#app');