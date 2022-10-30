import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import theme from 'styles/theme'
import appLogo from 'assets/images/loader-logo.png'
import { useEffect } from 'react'
import { APP_ROUTER } from 'utils/constants'
const BoxCustomStyle = styled(Box)`
  background-color: ${theme.primary_background};
  .logo {
    & img {
      width: 140px;
      height: 32px;
      object-fit: cover;
    }
  }

  .btn__forgot-password {
    padding: 6px;
    border-radius: 25px;
    color: ${theme.link};
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      background-color: ${theme.link_hover};
    }
  }
`

const AuthLayout = () => {
  let navigate = useNavigate()
  let location = useLocation()
  useEffect(() => {
    if (location.pathname === '/auth') {
      return navigate(APP_ROUTER.LOGIN)
    }
  }, [location, navigate])
  return (
    <BoxCustomStyle component='main'>
      <section className='pt-4 ml-[56px] '>
        <Link to='/' className='logo'>
          <img src={appLogo} alt='' />
        </Link>
      </section>
      <section className='flex min-h-[100vh]'>
        <aside className='shadow-md p-6 rounded-md m-auto bg-white w-[352px] text-center '>
          <Outlet />
        </aside>
      </section>
    </BoxCustomStyle>
  )
}

export default AuthLayout
