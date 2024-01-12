import React from 'react';
import { Box } from '@mui/material';
import NavbarMain from 'component/layout/main/NavbarMain';
import SidebarMain from 'component/layout/main/SidebarMain';
import ContentMain from 'component/layout/main/ContentMain';
import CardTalentDetail from 'component/card/CardTalentDetail';
import CardTalentWishlist from 'component/card/CardTalentWishlist';
import CardTalentRequest from 'component/card/CardTalentRequest';
import { useIsMobile } from 'utils/functions';

const Main = () => {
  const isMobile = useIsMobile();
  const talentData = [
    {
      name: 'Markus Kotlin',
      status: 'Available',
      experience: '5+',
      level: 'Senior',
      position: ['Android Developer', 'Web Developer'],
      skill: ['Javascipt', 'ReactJS', 'VueJS', 'Kotlin', 'Flutter', 'PHP', 'Laravel'],
    },
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <NavbarMain />
      <Box
        sx={{
          position: 'relative',
          boxSizing: 'border-box', //detail, wislist
          minHeight: '100vh',
          bgcolor: '#fdfdfd',
          p: '100px 250px 30px', //detail, wistlist
        }}
      >
        {/* Talent List */}
        {/* {!isMobile && <SidebarMain />}
        <ContentMain talentData={talentData[0]} /> */}

        {/* Talent Detail */}
        {/* <CardTalentDetail talentData={talentData[0]} /> */}

        {/* Talent Wishlist */}
        {/* <CardTalentWishlist talentData={talentData[0]} /> */}

        {/* Talent Requset */}
        <CardTalentRequest talentData={talentData[0]} />
      </Box>
    </Box>
  );
};

export default Main;
