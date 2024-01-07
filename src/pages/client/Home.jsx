import React from 'react';
import { Box } from '@mui/material';
import NavbarMain from 'component/layout/main/NavbarMain';
import SidebarMain from 'component/layout/main/SidebarMain';

const Home = () => {
  return (
    <>
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <NavbarMain />
        <Box
          sx={{
            position: 'relative',
            minHeight: 'calc(100vh - 64px)', // fullscreen - navbar
            bgcolor: '#f2f2f2',
          }}
        >
          <SidebarMain />

        </Box>
      </Box>
    </>
  );
};

export default Home;
