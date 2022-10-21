import React from "react";
import FeedsContainer from "./feedsContainer";
import ShareBoxFeedEntry from "./shareBoxFeedEntry";
import MainContainer from "./style";

const Main = () => {
  return (
    <MainContainer component="main">
      <ShareBoxFeedEntry />
      <FeedsContainer />
    </MainContainer>
  );
};

export default Main;
