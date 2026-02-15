// import './bootstrap';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

import './bootstrap';
import { createApp } from 'vue';

// Importa um componente Vue de exemplo
import ExampleComponent from './components/ExampleComponent.vue';

// Cria a instância do Vue
const app = createApp({});

// Registra o componente globalmente
app.component('example-component', ExampleComponent);

// Monta o Vue dentro da div com id="app"
app.mount('#app');