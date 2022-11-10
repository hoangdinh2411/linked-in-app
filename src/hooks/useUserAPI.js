import axiosConfig from 'services/axiosConfig'
import useUserSelectors from 'store/selectors/userSelector'
import { apiURLs } from 'utils/constants'

const useUserAPI = () => {
  const { saveUserDetail } = useUserSelectors()
  const getUserDetail = async () => {
    const res = await axiosConfig.get(apiURLs.user.detail)
    if (res?.success) {
      saveUserDetail(res.result)
    }
  }
  return {
    getUserDetail,
  }
}

export default useUserAPI
