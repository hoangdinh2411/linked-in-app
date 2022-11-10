import { Box, Typography } from '@mui/material'
import Button from 'components/ui/Button'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { APP_ROUTER } from 'utils/constants'
import confirmationImg from 'assets/images/confirmation-email.png'
import { useNavigate } from 'react-router-dom/dist'
function ConfirmationTemplate() {
  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!location.state) {
      navigate(APP_ROUTER.LOGIN)
    }
  }, [])
  return (
    <div>
      <Box
        component='article'
        className='mb-4 flex flex-col items-center justify-center'
      >
        <img src={confirmationImg} alt='' className='w-1/2 ' />
        <Typography variant='h4' component='h4' className='font-bold  my-3'>
          Thank You For Your Registration
        </Typography>
        <Typography
          variant='body1'
          component='span'
          className='text-sx font-light'
        >
          We have send you an confirmation email to{' '}
          <span className='font-bold text-lg'>
            {location.state && location.state.email}
          </span>
        </Typography>
        <Typography
          variant='subtitle1'
          component='span'
          className='text-sx font-light mb-4'
        >
          Please confirm your email address to active you account
        </Typography>

        <Button variant='contained' className='rounded'>
          <Link to={APP_ROUTER.LOGIN}>Continue</Link>
        </Button>
      </Box>
    </div>
  )
}

export default ConfirmationTemplate
