import { useDispatch, useSelector } from 'react-redux'

const UseAppSelector = () => {
  const userDetail = useSelector((state) => state.app)
  const dispatch = useDispatch()

  return {
    userDetail,
  }
}

export default UseAppSelector
