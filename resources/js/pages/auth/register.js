import { createApp } from 'vue';
import { setupApp } from '../../app';
import RegisterPage from '../../views/auth/RegisterPage.vue';

const app = createApp(RegisterPage);
setupApp(app);
app.mount('#app');