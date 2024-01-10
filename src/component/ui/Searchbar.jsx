import React from 'react';
import { TextField, InputAdornment, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ sx }) => {
  const handleSearch = (event) => {
    console.log('Search query:', event.target.value);
  };

  return (
    <Paper component="form" sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      <TextField
        fullWidth
        placeholder='   Try "Javascript"'
        variant="outlined"
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" size="large">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};

export default SearchBar;
