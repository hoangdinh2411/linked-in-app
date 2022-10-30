import React from 'react'
import { Button as MuiButton } from '@mui/material'
import styled from '@emotion/styled'
import theme from 'styles/theme'

const ButtonCustomStyle = styled(MuiButton)`
  border-radius: 35px;
  border-color: ${theme.border};
  font-size: 16px;
  text-transform: none;
  border-width: 1.5px;
  color: ${theme.button_text};
  padding: 6px 16px;
  font-size: 16px;
  min-width: 98px;
  font-weight: 600;
  letter-spacing: 0.5px;

  &.MuiButton-text{
    padding: 6px;

  }
  &.MuiButton-outline {
    padding: 6px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 0;
    color: ${theme.button_outline_text};
    svg {
      color: ${theme.button_outline_text};
    }
  }
  &.MuiButton-containedPrimary {
    background-color: ${theme.button_contained_background};
    color: ${theme.white};
  }
  &.MuiButton-sizeSmall {
    height: 32px;
  }
  &.MuiButton-sizeMedium {
    height: 46px;
  }
  svg {
    margin-right: 4px;
  }
  &:hover {
    &.MuiButton-outline {
      color: ${theme.button_outline_text};
      background-color: ${theme.button_outline_text_hover_focus};
      svg {
        color: ${theme.button_outline_text};
      }
    }
    &.MuiButton-containedPrimary {
      background-color: ${theme.button_contained_background_hover};
      color: ${theme.white};
    }
    border-width: 1.5px;
    background-color: ${theme.background_hover};
    color: ${theme.button_text_hover_focus};
    border-color: ${theme.button_border_hover};
    svg {
      color: ${theme.button_text_hover_focus};
    }
  }
`

const Button = (props) => {
  const { children, textPosition, ...restProps } = props
  return (
    <ButtonCustomStyle
      variant='outlined'
      sx={{
        justifyContent: textPosition ? textPosition : 'center',
      }}
      {...restProps}
    >
      {children}
    </ButtonCustomStyle>
  )
}

export default React.memo(Button)
