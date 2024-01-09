import React from 'react';
import { IconButton, Drawer, List, ListItem, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = ({ isOpen, handleClose, anchor, paperProps, buttonTop, buttonBottom, sx }) => (
  <Drawer anchor={anchor} open={isOpen} onClose={handleClose} PaperProps={paperProps}>
    <Box sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', ...sx }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: '20px', py: '10px' }}>
        <IconButton edge="end" color="inherit" aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>{buttonTop}</ListItem>

        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>{buttonBottom}</ListItem>
      </List>
    </Box>
  </Drawer>
);

export default MobileMenu;
