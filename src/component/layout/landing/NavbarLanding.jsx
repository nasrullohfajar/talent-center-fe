import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ModalSignIn from 'component/modal/ModalSignIn';
import ModalRegister from 'component/modal/ModalRegister';
import MobileMenu from 'component/layout/mobile/MobileMenu';
import logotujuhsembilan from 'assets/image/logotujuhsembilan.svg';
import { useIsMobile } from 'utils/functions';

const NavbarLanding = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const isMobile = useIsMobile();

  const changeDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const changeModalSignInOpen = () => {
    setIsModalSignInOpen(!isModalSignInOpen);
  };

  const changeModalRegisterOpen = () => {
    setIsModalRegisterOpen(!isModalRegisterOpen);
  };

  useEffect(() => {
    if (isModalSignInOpen || isModalRegisterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isModalSignInOpen, isModalRegisterOpen]);

  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 99 }}>
        <AppBar position="static" sx={{ background: 'none', boxShadow: 'none', py: '10px', px: '10px' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logotujuhsembilan} alt="Logo" style={{ width: '50px' }} />
              <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '700', ml: '10px' }}>
                Talent Center 79
              </Typography>
            </Box>

            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={changeDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}

            {isMobile ? (
              <MobileMenu
                isOpen={isDrawerOpen}
                handleClose={changeDrawerOpen}
                anchor={'right'}
                paperProps={{ sx: { width: '60%', bgcolor: '#2C8AD3' } }}
                sx={{ pl: '50px' }}
                buttonTop={
                  <Button
                    color="inherit"
                    onClick={() => {
                      changeModalRegisterOpen();
                      changeDrawerOpen();
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
                      changeModalSignInOpen();
                      changeDrawerOpen();
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
                    onClick={changeModalRegisterOpen}
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
                    onClick={changeModalSignInOpen}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            )}
          </Toolbar>
        </AppBar>

        <ModalSignIn open={isModalSignInOpen} handleClose={changeModalSignInOpen} />
        <ModalRegister open={isModalRegisterOpen} handleClose={changeModalRegisterOpen} />
      </Box>
    </>
  );
};

export default NavbarLanding;
