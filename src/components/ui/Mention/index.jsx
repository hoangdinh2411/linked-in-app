import React from 'react'
import { MentionsInput } from 'react-mentions'
import theme from 'styles/theme'

const mentionHashTagStyle = {
  control: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 0,
    margin: 0,
  },

  '&multiLine': {
    control: {
      minHeight: '120px',
      maxHeight: '200px',
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'relative',
    },
    highlighter: {
      
    },
    input: {
      border: 'none',
      outline: 'none',
      padding: 8,
    },
  },

  '&singleLine': {
    highlighter: {},
    input: {
      border: 'none',
      outline: 'none',
      padding: 8,
    },
  },
  // style for suggestions
  suggestions: {
    top: 20,
    width: '100%',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.1)',
    borderRadius: 4,
    list: {
      overflowY: 'auto',
      overflowX: 'hidden',
      height: 200,
      backgroundColor: 'white',
      width: '100%',
    },
    item: {
      padding: 8,
      '&focused': {
        backgroundColor: `${theme.background_hover}`,
      },
    },
  },
}
const Mentions = (props) => {
  const { children, ...rest } = props
  return (
    <MentionsInput style={mentionHashTagStyle} {...rest}>
      {children}
    </MentionsInput>
  )
}

export default Mentions
