import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import logotujuhsembilan from '../../../assets/image/logotujuhsembilan.svg';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import SearchBar from 'component/ui/Searchbar';
import MobileMenu from '../mobile/MobileMenu';
import myrequest from 'assets/icon/myrequest.svg';
import signout from 'assets/icon/signout.svg';
import { useIsMobile } from '../../../utils/functions';

const NavbarMain = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 99 }}>
        <AppBar position="static" sx={{ bgcolor: '#081E43', boxShadow: 'none', py: '2px', px: isMobile ? '2px' : '20px' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logotujuhsembilan} alt="Logo" style={{ width: '50px' }} />
              <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '700', ml: '10px' }}>
                Talent Center 79
              </Typography>
            </Box>

            {!isMobile && <SearchBar sx={{ width: 600, height: '35px' }} />}

            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', gap: '10px' }}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {}}>
                  <BookmarkIcon />
                </IconButton>

                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {}}>
                  <NotificationsIcon />
                </IconButton>

                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                  <PersonIcon />
                </IconButton>
              </Box>
            )}

            {isMobile ? (
              <MobileMenu
                isOpen={isDrawerOpen}
                handleClose={handleDrawerClose}
                anchor={'right'}
                paperProps={{ sx: { width: '60%', bgcolor: '#2C8AD3' } }}
                sx={{ pl: '30px' }}
                buttonTop={
                  <Button
                    color="inherit"
                    onClick={() => {
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
                    <Box sx={{ mr: '10px' }}>
                      <img src={myrequest} alt="icon" width={'14px'} style={{ paddingTop: '7px' }} />
                    </Box>
                    My Request
                  </Button>
                }
                buttonBottom={
                  <Button
                    color="inherit"
                    onClick={() => {
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
                    <Box sx={{ mr: '10px' }}>
                      <img src={signout} alt="icon" width={'14px'} style={{ paddingTop: '7px' }} />
                    </Box>
                    Sign Out
                  </Button>
                }
              />
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <IconButton edge="end" color="inherit" aria-label="close">
                    <BookmarkIcon />
                  </IconButton>

                  <IconButton edge="end" color="inherit" aria-label="close" sx={{ mr: '2px' }}>
                    <NotificationsIcon />
                  </IconButton>

                  <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', borderLeft: '2px solid #DBDBDB', height: '20px', px: '20px' }}>
                    <IconButton edge="end" color="inherit" aria-label="close">
                      <PersonIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ fontFamily: 'inter, sans-serif', fontSize: '14px', fontWeight: '400', ml: '10px' }}>
                      User 79
                    </Typography>

                    <IconButton edge="end" color="inherit" aria-label="close">
                      <ArrowDropDownIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavbarMain;
