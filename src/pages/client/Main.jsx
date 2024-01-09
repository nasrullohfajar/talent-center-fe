import React from 'react';
import { Box } from '@mui/material';
import NavbarMain from 'component/layout/main/NavbarMain';
import SidebarMain from 'component/layout/main/SidebarMain';
import ContentMain from 'component/layout/main/ContentMain';

const Main = () => {
  return (
    <>
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <NavbarMain />
        <Box
          sx={{
            position: 'relative',
            minHeight: '100vh', // fullscreen - navbar
            bgcolor: '#f2f2f2',
          }}
        >
          {/* <SidebarMain /> */}
          {/* <ContentMain /> */}
        </Box>
      </Box>
    </>
  );
};

export default Main;
