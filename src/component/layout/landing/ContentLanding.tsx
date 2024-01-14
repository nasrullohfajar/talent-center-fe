import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from 'component/ui/Searchbar';
import Tag from 'component/ui/Tag';
import { useIsMobile } from 'utils/functions';

const ContentLanding = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '50px',
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: 'white', textAlign: 'center' }}>
        Welcome to <br />
        Talent Center 79
      </Typography>

      <SearchBar sx={{ width: isMobile ? '80% ' : 600 }} />

      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: 'white' }}>
          Popular
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Tag type="button" name="Javascript" />
          <Tag type="button" name="Scrum Master" />
          <Tag type="button" name="ReactJS" />
          <Tag type="button" name="Web Front-End Developer" />
          <Tag type="button" name="VueJS" />
        </Box>
      </Box>
    </Box>
  );
};

export default ContentLanding;
