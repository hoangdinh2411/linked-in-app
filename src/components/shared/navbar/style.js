import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { AppBar } from "@mui/material";
import theme from "styles/theme";

const avatarAnimation = keyframes`
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);

  }
`;

export const AppBarCustomStyle = styled(AppBar)`
  width: 100%;
  background-color: ${theme.white};
  box-shadow: none;
  border-bottom: 1px solid ${theme.border_navbar_bottom};
  z-index: 1000;
  .MuiContainer-root {
    width: ${theme.widthOnDesktop};
    padding: 0;
    height: ${theme.heightNavbar};
    display: flex;
    align-items: center;
    justify-content: space-between;
    .MuiBox-root {
      display: flex;
      align-items: center;
      .logo {
        width: 34px;
        height: 34px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .search-bar {
      flex: 1;
      .MuiFormControl-root {
        margin-left: 4px;
        .MuiInputBase-root.MuiOutlinedInput-root {
          width: 280px;
          height: 34px;
          font-size: 14px;
          transition: all 0.2s ease-in;

          background-color: ${theme.background_search_input};
          fieldset {
            border: none;
          }
          svg {
            width: 16px;
            height: 16px;
          }
          .MuiInputBase-input {
            padding-top: 0;
            padding-bottom: 0;
            padding-right: 8px;
            height: 100%;
            &::-webkit-input-placeholder {
              color: ${theme.text};
              font-size: 16px;
              opacity: 1;
            }
          }
          &.Mui-focused {
            fieldset {
              border: 2px solid ${theme.border_active};
            }
            width: 380px;
          }
        }
      }
    }
    .menu {
      li {
        display: inline-block;
        color: ${theme.nav_item};
        width: 80px;
        transition: all 0.2s linear;
        position: relative;
        &:hover {
          color: ${theme.nav_item_hover};
        }

        &.active {
          color: ${theme.nav_item_selected_active};
          a {
            &::after {
              visibility: visible;
              opacity: 1;
              width: 100%;
            }
          }
        }
        a {
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          &::after {
            content: "";
            visibility: hidden;
            opacity: 0;
            width: 0;
            transition: all 0.3s ease;
            background-color: ${theme.nav_item_selected_active};
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
          }
          svg {
            font-size: 20px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
    .me {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80px;
      cursor: pointer;
      .dropdown-menu {
        width: 200px;
        height: 100px;
        background-color: red;
      }
      &.active {
        .MuiAvatar-root {
          animation: ${avatarAnimation} 0.4s linear alternate;
        }
      }
      &:hover {
        span {
          color: ${theme.text};
        }
      }
      span {
        font-size: 12px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.text_low_emphasis};
        svg {
          width: 10px;
          height: 10px;
          margin-left: 4px;
        }
      }
    }

    .work-and-premium {
      border-left: 1px solid ${theme.border};
      .work {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 80px;
        height: 42px;
        color: ${theme.text_low_emphasis};
        cursor: pointer;
        svg {
          width: 18px;
          height: 18px;
        }
        span {
          font-size: 12px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 10px;
            height: 10px;
            margin-left: 4px;
          }
        }
        &:hover {
          color: ${theme.text};
        }
      }

      .premium {
        width: 100px;
        text-align: center;
        color: ${theme.premium_link};
        font-size: 12px;
        text-decoration: underline;
        &:hover {
          color: ${theme.premium_link_hover};
        }
      }
    }
  }
`;
