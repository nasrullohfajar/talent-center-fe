import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logotujuhsembilan2 from 'assets/image/logotujuhsembilan2.svg';
import { useIsMobile } from 'utils/functions';

const InfoLanding = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'start',
        height: '100%',
        backgroundColor: '#142B51',
        color: 'white',
        paddingY: '50px',
        paddingX: isMobile ? '50px' : '450px',
        gap: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          width: isMobile ? '100%' : '500px',
          alignItems: isMobile ? 'center' : 'start',
          textAlign: isMobile ? 'center' : 'start',
        }}
      >
        <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
          Useful Link
        </Typography>

        <div className="underline-component"></div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <Typography
            variant="body2"
            component={Link}
            to="/register"
            sx={{ fontFamily: 'Inter, sans-serif', color: 'white', textDecoration: 'none' }}
            className="text"
          >
            Home
          </Typography>

          <Typography
            variant="body2"
            component={Link}
            to="/register"
            sx={{ fontFamily: 'Inter, sans-serif', color: 'white', textDecoration: 'none' }}
            className="text"
          >
            Our Technologies
          </Typography>

          <Typography
            variant="body2"
            component={Link}
            to="/register"
            sx={{ fontFamily: 'Inter, sans-serif', color: 'white', textDecoration: 'none' }}
            className="text"
          >
            Why Choose Us
          </Typography>

          <Typography
            variant="body2"
            component={Link}
            to="/register"
            sx={{ fontFamily: 'Inter, sans-serif', color: 'white', textDecoration: 'none' }}
            className="text"
          >
            Testimonials
          </Typography>

          <Typography
            variant="body2"
            component={Link}
            to="/register"
            sx={{ fontFamily: 'Inter, sans-serif', color: 'white', textDecoration: 'none' }}
            className="text"
          >
            Contact
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          gap: '2px',
          width: isMobile ? '100%' : '500px',
          alignItems: isMobile ? 'center' : 'start',
          textAlign: isMobile ? 'center' : 'start',
          mt: isMobile ? '30px' : '',
        }}
      >
        <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: '700' }}>
          Contact Us
        </Typography>

        <div className="underline-component"></div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <Typography
            variant="h6"
            sx={{ fontFamily: 'Inter, sans-serif', fontSize: 'small', fontWeight: '400', color: 'white', textDecoration: 'none' }}
            className="text"
          >
            <span style={{ fontWeight: '700' }}>Address: </span>
            Kompleks Terasana No.6A Jalan Cihampelas (Bawah) <br />
            Bandung 40171
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontFamily: 'Inter, sans-serif', fontSize: 'small', fontWeight: '400', color: 'white', textDecoration: 'none' }}
            className="text"
          >
            <span style={{ fontWeight: '700' }}>Phone: </span>
            (022) 20505455
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontFamily: 'Inter, sans-serif', fontSize: 'small', fontWeight: '700', color: 'white', textDecoration: 'none' }}
            className="text"
          >
            Follow Us On
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px', alignItems: 'center', justifyContent: isMobile ? 'center' : 'start' }}>
            <IconButton sx={{ color: 'white', padding: '0px' }}>
              <FacebookIcon />
            </IconButton>

            <IconButton sx={{ color: 'white', padding: '0px' }}>
              <InstagramIcon />
            </IconButton>

            <IconButton sx={{ color: 'white', padding: '0px' }}>
              <YouTubeIcon />
            </IconButton>
          </Box>

          <Box>
            <img src={logotujuhsembilan2} alt="Logo" style={{ width: isMobile ? '120px' : '180px', marginTop: '5px' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoLanding;
