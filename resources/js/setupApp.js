import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import registerComponents from './plugins/components'

export function setupApp(app) {
  app.use(createPinia())
  app.use(Toast, {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  })
  
  registerComponents(app)
}