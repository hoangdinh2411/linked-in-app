import { Container } from "@mui/material";
import React from "react";
import { AppBarCustomStyle } from "./style";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import WorkAndPremium from "./WorkAndPremium";

const Navbar = () => {
  return (
    <AppBarCustomStyle position="fixed">
      <Container>
        <Logo />
        <SearchBar />
        <Menu />
        <WorkAndPremium />
      </Container>
    </AppBarCustomStyle>
  );
};

export default Navbar;
