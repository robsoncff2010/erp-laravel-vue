import { createApp } from 'vue';
import { setupApp } from '../../app';
import HomePage from '../../views/home/HomePage.vue';

const app = createApp(HomePage);
setupApp(app);
app.mount('#app');