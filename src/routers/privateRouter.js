import MainLayout from 'components/shared/layouts/MainLayout'
import { Navigate } from 'react-router-dom'
import useUserSelectors from 'store/selectors/userSelector'
const PrivateRouter = () => {
  const { userDetailInStore } = useUserSelectors()
  return userDetailInStore ? <MainLayout /> : <Navigate to='/auth/login' />
}

export default PrivateRouter
