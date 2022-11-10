import axios from 'axios'
import { apiURLs, APP_ROUTER } from 'utils/constants'
import {
  getValueFromSession,
  getItemInLocalStorage,
  removeItemInLocalStorage,
  setValueInSession,
  removeValueInSession,
} from '../utils/helpers'

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  headers: {
    'Context-Type': 'application/json',
  },
})
// axiosConfig.defaults.withCredentials = true;

axiosConfig.interceptors.request.use(
  function (req) {
    let access_token = getValueFromSession('access_token')
    req.headers['Authorization'] = `Bearer ${access_token}`
    return req
  },
  function (error) {
    console.log('request error ', error)
    return Promise.reject(error)
  }
)

axiosConfig.interceptors.response.use(
  function (res) {
    if (res.data?.message?.includes('access token')) {
      getNewAccessToken()
      return
    }
    return res.data
  },
  function (error) {
    console.log('response error ', error)
    return Promise.reject(error)
  }
)
function getNewAccessToken() {
  const refresh_token = getItemInLocalStorage('refresh_token')
  axiosConfig
    .post(apiURLs.auth.new_access_token, {
      refresh_token,
    })
    .then((res) => {
      if (res.success) {
        setValueInSession('access_token', res.new_access_token)
        return
      } else {
        window.location = APP_ROUTER.LOGIN
        removeItemInLocalStorage('refresh_token')
        removeValueInSession('access_token')
      }
    })
}
export default axiosConfig
