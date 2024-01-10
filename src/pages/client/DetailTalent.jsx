import React from 'react';
import { Box } from '@mui/material';
import NavbarMain from 'component/layout/main/NavbarMain';
import CardTalentDetail from 'component/card/CardTalentDetail';

const DetailTalent = () => {
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
          boxSizing: 'border-box',
          minHeight: '100vh',
          bgcolor: '#f2f2f2',
          p: '100px 250px 30px',
        }}
      >
        <CardTalentDetail talentData={talentData[0]} />
      </Box>
    </Box>
  );
};

export default DetailTalent;
