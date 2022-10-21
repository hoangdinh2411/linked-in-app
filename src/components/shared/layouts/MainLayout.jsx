import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "styles/theme";
import Navbar from "../navbar";
// import Navbar from "./components/shared/Navbar";
const LayoutCustomStyle = styled(Box)`
  min-height: 100vh;
  position: relative;
  background-color: ${theme.primary_background};
  display: flex;
  justify-content: center;
  padding-top: 52px;
  .content-wrapper {
    width: ${theme.widthOnDesktop};
    min-height: 1000vh;
    position: relative;
    margin: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

 const MainLayout = () => {
  return (
    <LayoutCustomStyle>
      <Navbar />
      <Box component="div" className="content-wrapper">
        <Outlet />
      </Box>
    </LayoutCustomStyle>
  );
};


export default MainLayout