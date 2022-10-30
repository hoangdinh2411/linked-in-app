import { Dialog as MuiDialog } from '@mui/material'
import React from 'react'
import theme from '../../../styles/theme'

const Dialog = (props) => {
  const { children, maxHeight, position, ...restProps } = props
  return (
    <MuiDialog
      sx={{
        zIndex: '88',
        '& .MuiDialog-container': {
          justifyContent: position ? position : 'center',
          '& .MuiPaper-root': {
            minHeight: maxHeight ? 'auto' : '200px',
            height: maxHeight ? '100%' : 'auto',
            boxShadow: 'none',
            minWidth: '380px',
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            borderRadius: '8px',
            overflowX: 'hidden',
          },
        },
      }}
      {...restProps}
      keepMounted
    >
      {children}
    </MuiDialog>
  )
}

export default React.memo(Dialog)
