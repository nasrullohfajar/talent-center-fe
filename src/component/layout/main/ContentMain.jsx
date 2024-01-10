import React from 'react';
import { useIsMobile } from 'utils/functions';
import { Box, Typography, Grid } from '@mui/material';
import CardTalent from 'component/card/CardTalent';
import FormSelect from 'component/form/FormSelect';
import PaginationMain from './PaginationMain';
import talentNotFound from 'assets/image/talentNotFound.png';
import SearchBar from 'component/ui/Searchbar';

const ContentMain = () => {
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
        minHeight: 'calc(100vh - 15 5px)',
        p: isMobile ? '80px 20px' : '115px 40px 40px 390px',
      }}
    >
      {isMobile && <SearchBar />}

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '5px' : '30px',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '20px',
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: 'black', order: isMobile ? 2 : 1, flexWrap: 'wrap' }}
        >
          Showing you 1 - 10 talents out of 15 for <span style={{ fontWeight: '700' }}>"Javascript"</span>
        </Typography>

        <Box sx={{ order: isMobile ? 1 : 2, display: 'flex', gap: '5px', mt: isMobile ? '15px' : '' }}>
          {isMobile && <FormSelect spec={filterSpec} />}
          <FormSelect spec={filterSpec} />
        </Box>
      </Box>

      <Box>
        {talentData.length > 0 ? (
          <Grid container spacing={3}>
            <Grid item xs={isMobile ? 12 : 6}>
              <CardTalent talentData={talentData[0]} />
            </Grid>

            <Grid item xs={isMobile ? 12 : 6}>
              <CardTalent talentData={talentData[0]} />
            </Grid>

            <Grid item xs={isMobile ? 12 : 6}>
              <CardTalent talentData={talentData[0]} />
            </Grid>
          </Grid>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <img src={talentNotFound} alt="Talent Not Found" />

            <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', color: '#848484', fontSize: '24px' }}>
              Data tidak tersedia
            </Typography>
          </Box>
        )}
      </Box>

      {/* {talentData.length > 0 && <PaginationMain />} */}
    </Box>
  );
};

export default ContentMain;
