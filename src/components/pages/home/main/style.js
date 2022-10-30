import styled from '@emotion/styled'
import { Box } from '@mui/system'
import theme from 'styles/theme'

const MainContainer = styled(Box)`
  .filter {
    width: 100%;
    margin: 8px 0;
    display: flex;
    align-items: center;
    box
    &__line {
      position: relative;
      margin-right: 8px;
      flex: 1;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${theme.text};
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
    &__by {
      min-width: 10%;
      font-size: 12px;

      .MuiInputBase-root {
        height: 20px;
        font-size: 14px;
        justify-content: space-between;
        font-weight: 600;
        fieldset {
          border: none;
        }
      }
    }
  }
`

export default MainContainer
