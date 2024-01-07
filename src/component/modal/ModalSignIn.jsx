import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box, Modal, IconButton, InputAdornment, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import GoogleIcon from '@mui/icons-material/Google';

import { useIsMobile } from '../../utils/functions';
import FormText from '../form/FormText';
import CustomAlert from './CustomAlert';

const ModalSignIn = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [errors, setErrors] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    //reset error
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const formError = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formError[key] = 'Kolom ini tidak boleh kosong';
      }
    });

    setErrors(formError);
    return Object.keys(formError).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await axios.post('http://localhost:8081/user-management/users/login', {
          username: formData.email,
          password: formData.password,
        });
        navigate('/home');
      } catch (error) {
        setIsAlert(true);
      }

      setFormData({
        email: '',
        password: '',
      });
      handleClose();
    }
  };

  useEffect(() => {
    if (isAlert && open) {
      setIsAlert(false);
    }
  }, [open, isAlert]);

  return (
    <>
      {isAlert && !open ? (
        <CustomAlert type={'error'} message={'Sign In Gagal'} open={true} />
      ) : (
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
                borderBottom: '1px solid #DBDBDB',
                py: '20px',
                mt: '20px',
              }}
            >
              <FormText label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />

              <FormText
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
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
      )}
    </>
  );
};

export default ModalSignIn;
