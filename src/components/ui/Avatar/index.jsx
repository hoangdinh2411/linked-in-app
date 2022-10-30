import React from 'react'
import { Avatar as MuiAvatar } from '@mui/material'

const Avatar = (props) => {
  const { width, height, icon, variant, ...restProps } = props
  return (
    <MuiAvatar
      variant={`${variant ? variant : 'circular'}`}
      {...restProps}
      sx={{
        width: width ? width + 'px' : '24px !important',
        height: height ? height + 'px' : '24px !important',
      }}
    >
      {icon}
    </MuiAvatar>
  )
}

export default React.memo(Avatar)
