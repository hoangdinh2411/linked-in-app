import { createTheme } from '@mui/material/styles'
import theme from './theme'

const customTheme = createTheme({
  typography: {
    fontFamily: ['"Blinker"', '"sans-serif"'].join(','),
  },
  spacing: 4,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          // Some CSS
          height: "32px",
          fontSize:'16px',
          fontWeight:'600',
          textTransform:'none',
          padding:'8px',
          ':hover': {
            backgroundColor: theme.link_hover,
            color:theme.text_hover
          },
        },
      },
    },
  },
})

export default customTheme
