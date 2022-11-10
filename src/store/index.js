import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import appReducer from './slices/appSlice'
import userReducer from './slices/userSlice'
export const store = configureStore({
    reducer:{
        app: appReducer,
        user:userReducer
    }
})

const StoreProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
