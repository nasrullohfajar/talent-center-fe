import React from 'react';
import { Box } from '@mui/material';
import NavbarLanding from 'component/layout/landing/NavbarLanding';
import Footer from 'component/layout/landing/FooterLanding';
import Info from 'component/layout/landing/InfoLanding';
import Content from 'component/layout/landing/ContentLanding';
import bgLanding from 'assets/image/bg-landingPage.png';
import { useIsMobile } from 'utils/functions';

const Landing = () => {
  const isMobile = useIsMobile();

  return (
    <Box>
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <NavbarLanding />
        <Box
          sx={{
            position: 'relative',
            backgroundImage: `url(${bgLanding})`,
            backgroundSize: 'cover',
            backgroundPosition: isMobile ? 'left center' : 'center',
            minHeight: 'calc(100vh - 64px)', // fullscreen - navbar
          }}
        >
          <Content />
        </Box>
      </Box>
      <Info />
      <Footer />
    </Box>
  );
};

export default Landing;
