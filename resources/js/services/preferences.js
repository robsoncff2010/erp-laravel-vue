import api from './api'

export async function switchTheme(theme) {
  return api.post('/preferences/theme', { theme })
}

export async function switchLanguage(locale) {
  return api.post('/preferences/language', { locale })
}