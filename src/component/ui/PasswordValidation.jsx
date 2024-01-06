import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const PasswordValidation = ({ password }) => {
  const isLengthValid = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
      <Typography variant="body2" sx={{ color: isLengthValid ? '#30A952' : '#848484', fontSize: '12px' }}>
        {isLengthValid ? (
          <CheckBoxIcon color="success" sx={{ fontSize: '12px', mr: '5px', color: '#30A952' }} />
        ) : (
          <DisabledByDefaultIcon sx={{ color: '#848484', fontSize: '12px', mr: '5px' }} />
        )}{' '}
        Password must be at least 8 characters long
      </Typography>
      <Typography variant="body2" sx={{ color: hasLetter && hasNumber ? '#30A952' : '#848484', fontSize: '12px' }}>
        {hasLetter && hasNumber ? (
          <CheckBoxIcon color="success" sx={{ fontSize: '12px', mr: '5px', color: '#30A952' }} />
        ) : (
          <DisabledByDefaultIcon sx={{ color: '#848484', fontSize: '12px', mr: '5px' }} />
        )}{' '}
        Password must contain at least one letter and one number
      </Typography>
    </Box>
  );
};

export default PasswordValidation;
