export const getToken = () => {
  return localStorage.getItem('GS_token')
}

export const setToken = (token: string) => {
  localStorage.setItem('GS_token', token);
}

export const removeToken = () => {
  localStorage.removeItem('GS_token')
}

export const setLocalTheme = (theme: string) => {
  localStorage.setItem('GS_theme', theme)
}

export const getLocalTheme = (): string | null => {
  return localStorage.getItem('GS_theme')
}

export const setUsername = (username: string) => {
  localStorage.setItem('GS_username', username);
}
