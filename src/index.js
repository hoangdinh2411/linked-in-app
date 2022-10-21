import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import customTheme from "./styles/muiTheme";
import App from "./App";
import SWRConfigProvider from "store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <SWRConfigProvider>
          <App />
        </SWRConfigProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
