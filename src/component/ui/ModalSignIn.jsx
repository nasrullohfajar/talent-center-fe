import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Typography, Button, Box, Modal, TextField, IconButton, InputAdornment, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { useIsMobile } from '../../utils/utils';

const ModalSignIn = ({ open, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8081/user-management/users/login', {
        username: email,
        password: password,
      });

      console.log('Login successful:', response.data);
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
    }

    setEmail('');
    setPassword('');
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          padding: '20px',
          borderRadius: '8px',
          outline: 'none',
          width: isMobile ? '260px' : '360px',
          p: '50px',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleClose} sx={{ p: '0' }}>
            <CloseIcon sx={{ fontSize: '20px', color: '#848484' }} />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', textAlign: 'center' }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', textAlign: 'center', color: 'gray', mt: '5px' }}>
            Please sign in first to explore further on our website
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            borderBottom: '1px solid #DBDBDB',
            py: '20px',
            mt: '20px',
          }}
        >
          <TextField label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} size="small" />

          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff sx={{ fontSize: '18px' }} /> : <Visibility sx={{ fontSize: '18px' }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              borderRadius: '5px',
              paddingX: '20px',
              paddingY: '7px',
              fontSize: '13px',
              textTransform: 'none',
              fontFamily: 'Inter, sans-serif',
              width: '100%',
              mt: '20px',
            }}
          >
            Sign In
          </Button>
        </Box>

        <Button
          variant="outlined"
          color="inherit"
          onClick={handleSubmit}
          sx={{
            borderRadius: '5px',
            paddingX: '20px',
            paddingY: '7px',
            fontSize: '13px',
            textTransform: 'none',
            fontFamily: 'Inter, sans-serif',
            width: '100%',
            color: '#848484',
            justifyContent: 'center',
            mt: '30px',
          }}
        >
          <GoogleIcon sx={{ marginRight: '5px', fontSize: '18px' }} />
          Sign In with Google
        </Button>

        <Typography variant="body2" sx={{ textAlign: 'center', mt: '50px' }}>
          Don't have an account?{' '}
          <Link href="#" onClick={() => console.log('Navigate to registration page')} sx={{ textDecoration: 'none' }}>
            Register Here
          </Link>
          .
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalSignIn;
