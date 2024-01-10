import React from 'react';
import { Box } from '@mui/material';
import NavbarMain from 'component/layout/main/NavbarMain';
import SidebarMain from 'component/layout/main/SidebarMain';
import ContentMain from 'component/layout/main/ContentMain';
import { useIsMobile } from 'utils/functions';

const Main = () => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <NavbarMain />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh', // fullscreen - navbar
          bgcolor: '#f2f2f2',
        }}
      >
        {!isMobile && <SidebarMain />}
        <ContentMain />
      </Box>
    </Box>
  );
};

export default Main;
