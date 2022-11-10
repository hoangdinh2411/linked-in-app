import AuthLayout from 'components/shared/layouts/AuthLayout'
import Loading from 'components/shared/loading'
import ConfirmationPage from 'pages/auth/confirmation'
import Login from 'pages/auth/login'
import Register from 'pages/auth/register'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../pages/Feed'
import { APP_ROUTER } from '../utils/constants'
import PrivateRouter from './privateRouter'
const Routing = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path={APP_ROUTER.INDEX} element={<PrivateRouter />}>
          <Route index element={<Feed />} />
          <Route path={APP_ROUTER.MY_NETWORK} element={<h1>Network</h1>} />
          <Route path={APP_ROUTER.JOBS} element={<h1>Jobs</h1>} />
          <Route path={APP_ROUTER.MESSAGING} element={<h1>MESSAGING</h1>} />
          <Route path={APP_ROUTER.NOTIFICATION} element={<h1>NOTIFICATION</h1>} />
          <Route path={APP_ROUTER.PROFILE} element={<h1>PROFILE</h1>} />
        </Route>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index path={APP_ROUTER.LOGIN} element={<Login />} />
          <Route path={APP_ROUTER.REGISTER} element={<Register />} />
          <Route path={APP_ROUTER.CONFIRMATION} element={<ConfirmationPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default Routing
