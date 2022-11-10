import { Box, LinearProgress } from '@mui/material'
import React from 'react'
import appLogo from 'assets/images/loader-logo.png'
import theme from 'styles/theme'

const Loading = () => {
  return (
    <Box className='fixed w-full h-full top-0 left-0  flex items-center justify-center bg-black-100 flex-col  z-1000'>
      <section className='pt-4 text-center'>
        <img src={appLogo} alt='' className='w-[100px] m-auto mb-4' />
        <LinearProgress
          sx={{
            backgroundColor: theme.loading_background,

            '& .MuiLinearProgress-bar': {
              backgroundColor: theme.loading_line_background,
            },
          }}
          className=' w-[200px] m-auto '
        />
      </section>
    </Box>
  )
}

export default Loading
