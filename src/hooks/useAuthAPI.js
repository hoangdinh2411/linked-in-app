import { useNavigate } from 'react-router-dom'
import axiosConfig from 'services/axiosConfig'
import { apiURLs, APP_ROUTER } from 'utils/constants'
import { removeItemInLocalStorage, removeValueInSession } from 'utils/helpers'

const useAuthAPI = () => {
  const navigate = useNavigate()
  const register = async (formData) => {
    return await axiosConfig.post(apiURLs.auth.register, formData)
  }
  const login = async (formData) => {
    return await axiosConfig.post(apiURLs.auth.login, formData)
  }
  const logout = () => {
    removeItemInLocalStorage('refresh_token')
    removeValueInSession('access_token')
    navigate(APP_ROUTER.LOGIN)
  }

  return {
    // getNewAccessToken,
    register,
    login,
    logout,
  }
}

export default useAuthAPI
