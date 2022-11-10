import TextField from 'components/ui/Textfield'
import { Box, InputAdornment, Typography } from '@mui/material'
import Button from 'components/ui/Button'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APP_ROUTER } from 'utils/constants'
import * as yup from 'yup'
import useAuthAPI from 'hooks/useAuthAPI'
import Loading from 'components/shared/loading'
import { setValueInSession, setItemInLocalStorage } from 'utils/helpers'

const initialValues = {
  email: '',
  password: '',
}
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('This is not a email')
    .required('Email  is required'),
  password: yup
    .string()
    .min(8, 'Password must be 8-16 characters')
    .max(16, 'Password must be 8-16 characters')
    .required('Password is required'),
})
function LoginTemplate() {
  const [hidePass, setHidePass] = React.useState(true)
  const [loading, setIsLoadingLoading] = React.useState(false)
  const { login } = useAuthAPI()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, actions) => {
      setIsLoadingLoading(true)
      const res = await login(values)
      console.log(res)
      if (!res.success) {
        actions.resetForm()
        setIsLoadingLoading(false)
        return
      }
      setValueInSession('access_token', res.token.access_token)
      setItemInLocalStorage('refresh_token', res.token.refresh_token)
      navigate(APP_ROUTER.INDEX)
    },
  })
  const { touched, errors, getFieldProps, handleSubmit } = formik
  if (loading) return <Loading />

  return (
    <div className=' w-[352px]'>
      <Box component='article' className='mb-4'>
        <Typography variant='h4' component='h1' className='font-medium text-md'>
          Login
        </Typography>
        <Typography
          variant='subtitle1'
          component='span'
          className='text-sx font-light'
        >
          Stay updated on your professional world
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          type='text'
          label='Email'
          className='mb-4'
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          {...getFieldProps('email')}
        />
        <TextField
          type={hidePass ? 'password' : 'text'}
          label='Password'
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          {...getFieldProps('password')}
          className='mb-4'
          InputProps={{
            endAdornment: (
              <InputAdornment
                position='end'
                onClick={() => setHidePass(!hidePass)}
              >
                <span className='rounded-md px-2 py-1 mr-2 hover:bg-blue-500 cursor-pointer bg-white text-blue-700'>
                  {hidePass ? 'Hide' : 'Show'}
                </span>
              </InputAdornment>
            ),
          }}
        />
        <div className='flex justify-between items-center'>
          <Link to='#' className='btn__forgot-password'>
            Forgot password?
          </Link>
          <Link
            to={APP_ROUTER.REGISTER}
            className='hover:text-blue-700 underline'
          >
            Sign Up
          </Link>
        </div>
        <Button type='submit' variant='contained' className='w-full mt-6'>
          Sign in{' '}
        </Button>
      </form>
    </div>
  )
}

export default LoginTemplate
