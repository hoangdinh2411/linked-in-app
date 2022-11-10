import { useDispatch, useSelector } from 'react-redux'
import { setUserDetail } from 'store/slices/userSlice'

const useUserSelectors = () => {
  const userDetailInStore = useSelector((state) => state.user.userDetail)
  const dispatch = useDispatch()

  const saveUserDetail = (payload) => {
    dispatch(setUserDetail(payload))
  } 
  return {
    userDetailInStore,
    saveUserDetail
  }
}

export default useUserSelectors
