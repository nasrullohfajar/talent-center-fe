import React from 'react';
import { Box, Typography } from '@mui/material';

const EmptyData = ({ img, message }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <img src={img} alt="Empty Data" style={{ width: '250px' }} />

      <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', color: '#848484', fontSize: '18px' }}>
        {message}
      </Typography>
    </Box>
  );
};

export default EmptyData;
