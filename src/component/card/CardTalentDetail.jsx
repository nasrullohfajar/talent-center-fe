import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import talent from 'assets/image/talent.jpg';
import AvailableStatus from 'component/ui/AvailableStatus';
import TagTalent from 'component/ui/TagTalent';
import downloadCV from 'assets/icon/downloadCV.svg';
import AddIcon from '@mui/icons-material/Add';
import { useIsXl, useIsMobile } from 'utils/functions';

const CardTalentDetail = ({ talentData }) => {
  const isXl = useIsXl();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'white',
        borderRadius: '10px',
        p: '30px',
        boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid #DBDBDB', pb: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', gap: '10px' }}>
          <img src={talent} alt="Talent" style={{ width: '90%', borderRadius: '10px', objectFit: 'cover' }} />

          <Button
            color="inherit"
            variant="contained"
            sx={{
              width: '90%',
              borderRadius: '5px',
              paddingX: isXl ? '5px' : '20px',
              paddingY: '5px',
              fontSize: '14px',
              textTransform: 'capitalize',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              color: 'white',
              mt: '20px',
              bgcolor: '#2C8AD3',
              '&:hover': {
                bgcolor: '#1f69a3',
              },
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
            variant="text"
            sx={{
              width: '90%',
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
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: isMobile ? '14px' : '18px' }}>
              Project Completed
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
              57 Project
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: isMobile ? '14px' : '18px' }}>
              Total Requested
            </Typography>

            <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
              72 Requested
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ pt: '20px' }}>
        <Typography
          variant="body2"
          sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: isMobile ? '14px' : '22px', color: '#2C8AD3' }}
        >
          About
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', mt: '10px' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas tenetur consectetur, quis nemo consequatur odit. Eum delectus dolor
          aperiam rerum illo modi totam sit temporibus voluptate amet aliquam, ipsa ut!
        </Typography>
      </Box>
    </Box>
  );
};

export default CardTalentDetail;
