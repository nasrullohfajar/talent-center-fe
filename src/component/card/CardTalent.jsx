import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import talent from 'assets/image/talent.jpg';
import AvailableStatus from 'component/ui/AvailableStatus';
import TagTalent from 'component/ui/TagTalent';
import downloadCV from 'assets/icon/downloadCV.svg';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useIsXl, useIsMobile } from 'utils/functions';

const CardTalent = ({ talentData }) => {
  const isXl = useIsXl();
  const isMobile = useIsMobile();

  return (
    <Box sx={{ width: '100%', bgcolor: 'white', borderRadius: '10px', px: '30px', py: '20px', boxSizing: 'border-box' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', borderBottom: '1px solid #DBDBDB', pb: '20px' }}>
        <Box sx={{ width: isMobile ? '30%' : '20%' }}>
          <img src={talent} alt="Talent" style={{ width: '90%', borderRadius: '50%', objectFit: 'cover' }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', mb: '10px' }}>
              {talentData.status === 'Available' ? <AvailableStatus available={true} /> : <AvailableStatus available={false} />}

              <Typography
                variant="body2"
                sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#2C8AD3', fontSize: isMobile ? '14px' : '23px' }}
              >
                {talentData.name}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '10px', alignItems: 'start' }}>
              <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: '#848484' }}>
                {talentData.experience} {talentData.experience !== '1' ? ' Years of Experience' : 'Year of Experience'}
              </Typography>

              {!isMobile && (
                <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: '#848484' }}>
                  •
                </Typography>
              )}

              <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: '#848484' }}>
                {talentData.level} Level
              </Typography>
            </Box>
          </Box>

          <Box>
            <TagTalent name={'Position'} tag={talentData.position} />
          </Box>

          <Box>
            <TagTalent name={'Skill Set'} tag={talentData.skill} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyItems: 'center', pt: '20px', justifyContent: 'space-between' }}>
        <Button
          color="inherit"
          variant="text"
          sx={{
            borderRadius: '5px',
            paddingX: isXl ? '5px' : '20px',
            paddingY: '5px',
            fontSize: '14px',
            textTransform: 'capitalize',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '700',
            color: '#2C8AD3',
            alignItems: 'start',
          }}
          onClick={() => {}}
        >
          <Box sx={{ mr: '5px' }}>
            <img src={downloadCV} alt="icon" width={'14px'} style={{ paddingTop: '5px' }} />
          </Box>
          Download CV
        </Button>

        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyItems: 'center', gap: '10px' }}>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              borderRadius: '5px',
              paddingX: isXl ? '5px' : '20px',
              paddingY: '5px',
              fontSize: '14px',
              textTransform: 'capitalize',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              color: '#2C8AD3',
            }}
            onClick={() => {}}
          >
            <Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
              <AddIcon sx={{ fontSize: '18px' }} />
            </Box>
            Add to List
          </Button>
          <Button
            color="inherit"
            variant="contained"
            sx={{
              borderRadius: '5px',
              paddingX: isXl ? '5px' : '20px',
              paddingY: '5px',
              fontSize: '14px',
              textTransform: 'capitalize',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              color: 'white',
              bgcolor: '#2C8AD3',
              '&:hover': {
                bgcolor: '#1f69a3',
              },
            }}
            onClick={() => {}}
          >
            See Detail
            <Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
              <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CardTalent;
