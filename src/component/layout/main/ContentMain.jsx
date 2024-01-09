import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CardTalent from 'component/card/CardTalent';
import FormSelect from 'component/form/FormSelect';
import PaginationMain from './PaginationMain';

const ContentMain = () => {
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

  const filterSpec = [
    { value: 'ascYear', label: 'Years of Experience A-Z' },
    { value: 'descYear', label: 'Years of Experience Z-A' },
    { value: 'ascLevel', label: 'Level A-Z' },
    { value: 'descLevel', label: 'Level Z-A' },
    { value: 'ascName', label: 'Name A-Z' },
    { value: 'descName', label: 'Name Z-A' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        minHeight: 'calc(100vh - 15 5px)',
        p: '115px 40px 40px 390px',
      }}
    >
      <Box
        sx={{ display: 'flex', width: '100%', flexDirection: 'row', gap: '30px', alignItems: 'center', justifyContent: 'space-between', mb: '20px' }}
      >
        <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: 'black', mb: '20px' }}>
          Showing you 1 - 10 talents out of 15 for <span style={{ fontWeight: '700' }}>"Javascript"</span>
        </Typography>

        <FormSelect spec={filterSpec} />
      </Box>

      <Box>
        <Grid container spacing={3}>
          <Grid xs={6} sx={{ mt: '20px', pl: '20px' }}>
            <CardTalent talentData={talentData[0]} />
          </Grid>
          <Grid xs={6} sx={{ mt: '20px', pl: '20px' }}>
            <CardTalent talentData={talentData[0]} />
          </Grid>
          <Grid xs={6} sx={{ mt: '20px', pl: '20px' }}>
            <CardTalent talentData={talentData[0]} />
          </Grid>
        </Grid>
      </Box>

      <PaginationMain />
    </Box>
  );
};

export default ContentMain;
