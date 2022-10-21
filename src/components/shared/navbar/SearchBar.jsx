import { Box, TextField, InputAdornment } from "@mui/material";
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <Box component="div" className="search-bar">
      <TextField
        type="text"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon icon="fa:search" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
