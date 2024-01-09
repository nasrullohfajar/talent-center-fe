import React, { useState } from 'react';
import { useIsMobile } from '../../../utils/functions';
import logotujuhsembilan from '../../../assets/image/logotujuhsembilan.svg';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ModalSignIn from '../../modal/ModalSignIn';
import ModalRegister from '../../modal/ModalRegister';
import MobileMenu from '../mobile/MobileMenu';

const NavbarLanding = ({ bgColor, hasBg }) => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleModalSignInOpen = () => {
    setIsModalSignInOpen(true);
  };

  const handleModalSignInClose = () => {
    setIsModalSignInOpen(false);
  };

  const handleModalRegisterOpen = () => {
    setIsModalRegisterOpen(true);
  };

  const handleModalRegisterClose = () => {
    setIsModalRegisterOpen(false);
  };

  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 99 }}>
        <AppBar position="static" sx={{ background: hasBg, bgcolor: bgColor, boxShadow: 'none', py: '10px', px: '10px' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logotujuhsembilan} alt="Logo" style={{ width: '50px' }} />
              <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '700', ml: '10px' }}>
                Talent Center 79
              </Typography>
            </Box>

            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}

            {isMobile ? (
              <MobileMenu
                isOpen={isDrawerOpen}
                handleClose={handleDrawerClose}
                anchor={'right'}
                paperProps={{ sx: { width: '60%', bgcolor: '#2C8AD3' } }}
                sx={{ pl: '50px' }}
                buttonTop={
                  <Button
                    color="inherit"
                    onClick={() => {
                      handleModalRegisterOpen();
                      handleDrawerClose();
                    }}
                    sx={{
                      borderRadius: '25px',
                      px: '20px',
                      py: '7px',
                      fontSize: '14px',
                      textTransform: 'capitalize',
                      fontFamily: 'Inter, sans-serif',
                      color: 'white',
                    }}
                  >
                    Register
                  </Button>
                }
                buttonBottom={
                  <Button
                    color="inherit"
                    onClick={() => {
                      handleModalSignInOpen();
                      handleDrawerClose();
                    }}
                    sx={{
                      borderRadius: '25px',
                      border: '1px solid white',
                      px: '20px',
                      py: '7px',
                      fontSize: '14px',
                      textTransform: 'capitalize',
                      fontFamily: 'Inter, sans-serif',
                      color: 'white',
                    }}
                  >
                    Sign In
                  </Button>
                }
              />
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Button
                    color="inherit"
                    variant="text"
                    sx={{
                      borderRadius: '25px',
                      paddingX: '20px',
                      paddingY: '7px',
                      fontSize: '14px',
                      textTransform: 'capitalize',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onClick={() => {
                      handleModalRegisterOpen();
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    color="inherit"
                    variant="text"
                    sx={{
                      borderRadius: '25px',
                      border: '1px solid white',
                      paddingX: '20px',
                      paddingY: '7px',
                      fontSize: '14px',
                      textTransform: 'capitalize',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onClick={() => {
                      handleModalSignInOpen();
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            )}
          </Toolbar>
        </AppBar>

        <ModalSignIn open={isModalSignInOpen} handleClose={handleModalSignInClose} />

        <ModalRegister open={isModalRegisterOpen} handleClose={handleModalRegisterClose} />
      </Box>
    </>
  );
};

export default NavbarLanding;
