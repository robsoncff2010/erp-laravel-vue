import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    english: 'English',
    language: 'Language',
    portuguese: 'Portuguese',
    home: {
        login: 'Login',
        register: 'Register',
    }
    
  },
  pt: {
    theme: 'Tema',
    dark: 'Escuro',
    light: 'Claro',
    english: 'Inglês',
    language: 'Idioma',
    portuguese: 'Português',
    home: {
        login: 'Entrar',
        register: 'Registrar',
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'pt',
  fallbackLocale: 'en',
  messages
})

