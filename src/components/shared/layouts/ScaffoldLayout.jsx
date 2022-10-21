import { Box } from '@mui/material'
import React from 'react'

const ScaffoldLayout = (props) => {
  const { children, className, ...restProps } = props
  return (
    <Box
      component='div'
      {...restProps}
      className={`${className} rounded-md  overflow-hidden min-h-[100px] bg-white w-full border border-black-100 shadow-sm`}
    >
      {children}
    </Box>
  )
}

export default ScaffoldLayout
