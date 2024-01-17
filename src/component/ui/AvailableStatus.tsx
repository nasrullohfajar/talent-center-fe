import React from 'react';
import { Box, Typography } from '@mui/material';

interface IAvailableStatusProps {
  available: boolean;
}

const AvailableStatus = ({ available }: IAvailableStatusProps) => {
  return (
    <Box sx={{ width: '80px', height: '20px', borderRadius: '15px', border: '1px solid', color: available ? 'green' : 'red' }}>
      <Typography
        variant="body2"
        sx={{
          display: 'flex',
          height: '100%',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '400',
          fontSize: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          color: available ? 'green' : 'red',
        }}
      >
        {available ? 'Available' : 'Not Available'}
      </Typography>
    </Box>
  );
};

export default AvailableStatus;
