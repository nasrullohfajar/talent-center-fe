import React from 'react';
import { Box, Typography } from '@mui/material';

const FooterLanding = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#081E43',
        color: 'white',
        padding: '20px',
        gap: '2px',
      }}
    >
      <Typography variant="caption" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
        &copy; Copyright 2020
      </Typography>

      <Typography variant="caption" style={{ fontFamily: 'Inter, sans-serif' }}>
        Privacy Policy Design
      </Typography>

      <Typography variant="caption" style={{ fontFamily: 'Inter, sans-serif' }}>
        By Tujuh Sembilan
      </Typography>
    </Box>
  );
};

export default FooterLanding;
