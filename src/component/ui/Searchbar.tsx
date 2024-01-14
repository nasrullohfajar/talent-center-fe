import React, { ChangeEvent } from 'react';
import { SxProps } from '@mui/system';
import { TextField, InputAdornment, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchBarProps {
  sx?: SxProps;
}

const SearchBar = ({ sx }: ISearchBarProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('Search query:', event.target.value);
  };

  console.log('sx', sx);

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
