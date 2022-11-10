import TextField from 'components/ui/Textfield'
import { Box, InputAdornment, Typography } from '@mui/material'
import Button from 'components/ui/Button'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { APP_ROUTER } from 'utils/constants'
import * as yup from 'yup'
import Loading from 'components/shared/loading'
import useAuthAPI from 'hooks/useAuthAPI'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirm password is incorrect')
    .required('Confirm password is required'),
})
function RegisterTemplate() {
  const [hidePass, setHidePass] = React.useState(true)
  const navigate = useNavigate()
  const { register } = useAuthAPI()
  const [loading, setIsLoadingLoading] = React.useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, actions) => {
      setIsLoadingLoading(true)
      const res = await register(values)
      if (res.status) {
        actions.resetForm()
        setIsLoadingLoading(false)
        return
      }
      navigate(APP_ROUTER.CONFIRMATION, {
        state: {
          email: values.email,
        },
      })
    },
  })
  const { touched, errors, getFieldProps, handleSubmit } = formik
  if (loading) return <Loading />
  return (
    <div className='w-[352px]'>
      <Box component='article' className='mb-4 '>
        <Typography variant='h4' component='h1' className='font-medium text-md'>
          Register
        </Typography>
        <Typography
          variant='subtitle1'
          component='span'
          className='text-sx font-light'
        ></Typography>
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
        <TextField
          type={hidePass ? 'password' : 'text'}
          label='Confirm Password'
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          helperText={touched.confirmPassword && errors.confirmPassword}
          {...getFieldProps('confirmPassword')}
          className='mb-4'
        />
        <div className='flex justify-between items-center'>
          <Link to='#' className='btn__forgot-password'>
            Forgot password?
          </Link>
          <Link to={APP_ROUTER.LOGIN} className='hover:text-blue-700 underline'>
            Sign In
          </Link>
        </div>
        <Button type='submit' variant='contained' className='w-full mt-6'>
          Sign in{' '}
        </Button>
      </form>
    </div>
  )
}

export default RegisterTemplate
