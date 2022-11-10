export const setValueInSession = (key, value) => {
  sessionStorage.setItem(key, value)
}
export const removeValueInSession = (key) => {
  sessionStorage.removeItem('key')
}

export const getValueFromSession = (key) => {
  const value = sessionStorage.getItem(key) || ''
  return value
  // const cookieName = searchCookie + '='
  // const cookie = document.cookie
  // const cookieValues = cookie.split('; ')
  // for (let i = 0; i < cookieValues.length; i++) {
  //   let value = cookieValues[i]
  //   while (value.charAt(0) === ' ') {
  //     value = value.substring(1)
  //   }
  //   if (value.indexOf(cookieName) === 0) {
  //     return value.substring(cookieName.length, value.length)
  //   }
  // }
  // return ''
}

export const setItemInLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value)) || ''
}
export const getItemInLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || ''
}
export const removeItemInLocalStorage = (key) => {
  return localStorage.removeItem(key)
}
