import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/LinkedIn_icon.png";
import { APP_ROUTER } from "utils/constants";
const Logo = (props) => {
  return (
    <Box component="div" className="mx-1">
      <Link to={APP_ROUTER.INDEX} className="logo">
        <img src={logo} alt="Logo" />
      </Link>
    </Box>
  );
};

export default Logo;
