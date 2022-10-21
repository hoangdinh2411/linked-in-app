import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";

const CustomStyleTextField = styled(MuiTextField)`
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  overflow: hidden;

  & .MuiFormLabel-root {
    color: ${theme.label};
    font-size: 16px;
    margin: 0;
    &.Mui-focused {
      color: ${theme.label_focus_hover};
      font-size: 20px;
    }
  }

  &.Mui-error {
    & .MuiFormLabel-root {
      color: ${theme.label};
    }
  }
  & .MuiInputAdornment-root {
    min-height: 20px;
    min-width: 20px;
    background-color: ${theme.white};
  }
  & .MuiInputBase-root {
    border: 1px solid ${theme.border};

    background-color: white;
    &:hover {
      background-color: ${theme.white};
    }
    &:focus {
      background-color: ${theme.white};
    }
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
  }
  & input {
    padding: 24px 12px 4px;
    background-color: white;
    font-size: 16px;
  }

  &.MuiInputBase-inputMultiline {
    textarea {
      height: auto;
    }
  }

  & .MuiFormHelperText-root {
    margin: 4px 8px 0;
  }
`;
const TextField = (props) => {
  return <CustomStyleTextField variant="filled" {...props} />;
};

export default TextField;
