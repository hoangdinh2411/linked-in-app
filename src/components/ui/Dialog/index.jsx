import styled from "@emotion/styled";
import { Dialog as MuiDialog} from "@mui/material";
import React from "react";
import theme from "../../../styles/theme";


const DialogCustomStyle = styled(MuiDialog)`
  z-index: 88;
  & .MuiDialog-container {
    & .MuiPaper-root {
      /* margin-top: ${theme.heightNavbar}; */
      box-shadow: "none";
      min-width: 380px;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      border-radius: 8px;
      & .MuiDialogTitle-root{
        padding: 8px 48px 8px 12px;
        position:relative;
        /* border-bottom:1px solid ${theme.border}; */
      }
      & .MuiDialogContent-root {
        border: none;
        padding:8px 0;
      }
    }
  }
`;
const Dialog = (props) => {
  const { children, maxHeight, position, ...restProps } = props;
  return (
    <DialogCustomStyle
      sx={{
        "& .MuiDialog-container": {
          justifyContent: position ? position : "center",
          "& .MuiPaper-root": {
            minHeight: maxHeight ? "auto" : "200px",
            height: maxHeight ? "100%" : "auto",
          },
        },
      }}
      {...restProps}
      keepMounted
    >
      {children}
    </DialogCustomStyle>
  );
};

export default Dialog;
