import React from 'react';
import { Typography, TextField, FormControl } from '@mui/material';

const FormText = ({ label, name, value, onChange, error, multiline, type, inputProps }) => {
  return (
    <FormControl fullWidth size="small" sx={{ mt: 2 }}>
      <TextField
        label={label}
        name={name}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        size="small"
        error={Boolean(error)}
        multiline={multiline ? true : false}
        rows={multiline ? 4 : ''}
        type={type}
        InputProps={inputProps}
      />
      <Typography variant="caption" color="error">
        {error}
      </Typography>
    </FormControl>
  );
};

export default FormText;
