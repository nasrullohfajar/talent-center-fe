import React, { useState, useEffect } from 'react';
import { Box, Modal, Typography, Fade } from '@mui/material';
import { useIsMobile } from 'utils/functions';
import { ICustomAlertProps } from 'types';

const CustomAlert = ({ open, type, message }: ICustomAlertProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const isMobile = useIsMobile();
  let color = '';

  switch (type) {
    case 'error':
      color = '#CF1D1D';
      break;
    case 'warn':
      color = '#EBCA1D';
      break;
    case 'success':
      color = '#30A952';
      break;
    case 'info':
      color = '#2C8AD3';
      break;
    default:
      color = '#CF1D1D';
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [open]);

  return (
    <Modal open={isOpen}>
      <Fade in={isOpen} timeout={500}>
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translate(-50%,0px)',
            bgcolor: color,
            padding: '5px',
            borderRadius: '4px',
            outline: 'none',
            width: isMobile ? '260px' : '360px',
            height: isMobile ? '30px' : '30px',
          }}
        >
          <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', color: 'white' }}>
            {message}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomAlert;
