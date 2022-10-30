import React from "react";
import FeedsContainer from "./feedsContainer";
import FeedEntry from "./feedEntry";
import MainContainer from "./style";

const Main = () => {
  return (
    <MainContainer component="main">
      <FeedEntry />
      <FeedsContainer />
    </MainContainer>
  );
};

export default Main;
