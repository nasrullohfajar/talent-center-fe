import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import talent from 'assets/image/talent.jpg';
import AvailableStatus from 'component/ui/AvailableStatus';
import TagTalent from 'component/ui/TagTalent';
import downloadCVGray from 'assets/icon/downloadCVGray.svg';
import trash from 'assets/icon/trash.svg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useIsXl, useIsMobile } from 'utils/functions';
import EmptyData from 'component/ui/EmptyData';
import emptyDataWishlit from 'assets/image/emptyDataWishlist.png';

const CardTalentWishlist = ({ talentData }) => {
  const isXl = useIsXl();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: isMobile ? '14px' : '23px', mb: '20px' }}>
        My Wishlist
      </Typography>
      {talentData ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            bgcolor: 'white',
            borderRadius: '10px',
            p: '30px',
            boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              bgcolor: 'white',
              pb: '30px',
              borderBottom: '1px solid #DBDBDB',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%', gap: '10px' }}>
              <img src={talent} alt="Talent" style={{ width: '90%', borderRadius: '50%', objectFit: 'cover' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '60%' }}>
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
                <TagTalent name={'Skill Set'} tag={talentData.skill} max={5} />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%',
                gap: '5px',
                alignItems: 'start',
                justifyContent: 'center',
                borderLeft: '1px solid #DBDBDB',
                pl: '20px',
              }}
            >
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
                onClick={() => {
                  navigate('/talent/detail');
                }}
              >
                <Box sx={{ mr: '5px' }}>
                  <KeyboardArrowRightIcon sx={{ fontSize: '24px' }} />
                </Box>
                See Detail
              </Button>

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
                  color: '#848484',
                  alignItems: 'start',
                }}
                onClick={() => {}}
              >
                <Box sx={{ p: '2px 5px 0px', mr: '5px' }}>
                  <img src={downloadCVGray} alt="icon" width={'14px'} style={{ color: '#848484' }} />
                </Box>
                Download CV
              </Button>

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
                  color: '#CF1D1D',
                  alignItems: 'start',
                }}
                onClick={() => {}}
              >
                <Box sx={{ p: '2px 5px 0px', mr: '5px' }}>
                  <img src={trash} alt="icon" width={'14px'} style={{ color: '#848484' }} />
                </Box>
                Delete
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'end', mt: '10px', mr: '35px' }}>
            <Button
              color="inherit"
              variant="text"
              sx={{
                borderRadius: '5px',
                px: '20px',
                py: '5px',
                fontSize: '14px',
                textTransform: 'capitalize',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '700',
                color: '#CF1D1D',
                alignItems: 'start',
              }}
              onClick={() => {}}
            >
              <Box sx={{ p: '2px 5px 0px', mr: '5px' }}>
                <img src={trash} alt="icon" width={'14px'} style={{ color: '#848484' }} />
              </Box>
              Remove All
            </Button>
            <Button
              color="inherit"
              variant="contained"
              sx={{
                borderRadius: '5px',
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
              Request Talent
            </Button>
          </Box>
        </Box>
      ) : (
        <EmptyData img={emptyDataWishlit} message={'Tidak ada wishlist'} />
      )}
    </Box>
  );
};

export default CardTalentWishlist;
