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
        title_project: 'ERP project with Laravel(12) and Vue(pinia, vite, Inertia) - Studies',
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
        title_project: 'Projeto de ERP com Laravel(12) e Vue(pinia, vite, Inertia) - Estudos',
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

