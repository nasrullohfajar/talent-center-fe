import React, { ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton, Paper, SxProps, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchBarProps {
  sx?: SxProps;
}

const SearchBar = ({ sx }: ISearchBarProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('Search query:', event.target.value);
  };

  return (
    <Box component="form" sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        fullWidth
        placeholder=' Try "Javascript" '
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
          sx: { borderRadius: '30px', background: 'white', pl: '20px', ...sx },
        }}
      />
    </Box>
  );
};

export default SearchBar;
