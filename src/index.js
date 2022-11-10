import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from '@mui/material'
import customTheme from './styles/muiTheme'
import App from './App'
import StoreProvider from 'store'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
