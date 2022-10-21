import { Box } from "@mui/material";
import Feed from "components/shared/feed";
import React from "react";
import SortingFeeds from "./SortingFeeds";

const FeedsContainer = () => {
  return (
    <Box component="section">
      <SortingFeeds />
      <Feed />
    </Box>
  );
};

export default FeedsContainer;
