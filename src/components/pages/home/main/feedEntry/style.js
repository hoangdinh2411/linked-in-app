const { default: styled } = require('@emotion/styled')
const { Box } = require('@mui/system')
const { default: theme } = require('styles/theme')

const CustomFeedEntryForm = styled(Box)`
  width: 552px;
  position: relative;
  & .close-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 24px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      &:hover {
        background-color: ${theme.background_hover};
      }
    }
  }
  .feed-entry-form {
    &__rubric {
      font-size: 24px;
      font-weight: 600;
    }
    &__sub-rubric {
      padding: 12px 24px;
      font-size: 14px;
      color: ${theme.text_low_emphasis};
    }
    &__header {
      padding: 16px 24px;
      border-bottom: 1px solid ${theme.border};
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
    }

    &__entry {
      padding: 16px;
      div {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        .setting {
          /* flex: 1; */
          display: flex;
          flex-direction: column;
          padding: 0 8px;
          margin-left: 4px;
          &__user-name {
            font-size: 16px;
            font-weight: 600;
          }

          &__visibility {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            font-weight: normal;
            padding: 8px;
            & svg {
              margin: 0 4px;
            }
            .icon-down-arrow {
              font-size: 12px;
              margin-top: 2px;
            }
          }
        }
      }
      .hashtag-container {
        color: ${theme.text_blue};
      }
    }

    &__visible-options {
      padding: 12px 0;
      width: 100%;

      & .MuiFormGroup-root {
        & .MuiFormControlLabel-root {
          margin: 0;
          padding: 8px 24px;
          border-bottom: 1px solid ${theme.border};

          &:hover {
            background-color: ${theme.background_hover};
          }
          & .MuiTypography-root {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${theme.text};
            & svg {
              margin-right: 16px;
              font-size: 24px;
            }
            & aside {
              flex: 1;
              & .label {
                font-size: 16px;
                font-weight: 600;
              }
              & .sub-title {
                font-size: 14px;
                color: ${theme.text_low_emphasis};
                letter-spacing: 0.5px;
              }
            }
          }
        }
      }
    }

    &__actions {
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      aside {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__left {
        width: 55%;
      }
      &__right {
        flex: 1;
      }
    }
  }
`

export default CustomFeedEntryForm
