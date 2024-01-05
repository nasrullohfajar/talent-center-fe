import React, { useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Button,
  Box,
  Modal,
  IconButton,
  InputAdornment,
  Link,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import GoogleIcon from '@mui/icons-material/Google';

import { useIsMobile } from '../../utils/utils';
import PasswordValidation from '../landing/PasswordValidation';
import FormText from '../ui/FormText';

const ModalRegister = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    sex: '',
    birthdate: '1990-01-15',
    clientPositionId: '',
    agencyName: '',
    agencyAddress: '',
  });

  const isMobile = useIsMobile();
  const clientPositions = [
    { value: '22900d4a-1e68-4d09-8ef4-eb99614907d5', label: 'HRD (Human Resources Director)' },
  ];

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // //realtime validation
    // if (name === 'firstname' && value.length > 3) {
    //   setErrors({
    //     ...errors,
    //     [name]: lengthError,
    //   });
    //   return;
    // }

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
    const lengthError255 = 'Panjang kolom ini tidak boleh lebih dari 255';
    const lengthError100 = 'Panjang kolom ini tidak boleh lebih dari 100';

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formError[key] = 'Kolom ini tidak boleh kosong';
      }

      if ((key === 'firstName' || key === 'lastName' || key === 'agencyAddress') && formData[key].length > 255) {
        formError[key] = lengthError255;
      }

      if (key === 'agencyName' && formData[key].length > 100) {
        formError[key] = lengthError100;
      }
    });

    setErrors(formError);
    return Object.keys(formError).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8081/user-management/users/register', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          sex: formData.sex,
          birthdate: formData.birthdate,
          clientPositionId: formData.clientPositionId,
          agencyName: formData.agencyName,
          agencyAddress: formData.agencyAddress,
        });
      } catch (error) {
        console.log("error")
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        sex: '',
        birthdate: '1990-01-15',
        clientPositionId: '',
        agencyName: '',
        agencyAddress: '',
      });
      handleClose();
    }
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
          width: isMobile ? '260px' : '370px',
          p: '50px',
          overflow: 'scroll',
          height: '80%',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleClose} sx={{ p: '0' }}>
            <CloseIcon sx={{ fontSize: '20px', color: '#848484' }} />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', textAlign: 'center' }}>
            Register
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', textAlign: 'center', color: 'gray', mt: '5px' }}>
            Register so you can choose and request our talent
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '5px',
            borderBottom: '1px solid #DBDBDB',
            py: '20px',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormText label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
            </Grid>

            <Grid item xs={6}>
              <FormText label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
            </Grid>
          </Grid>

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

          <PasswordValidation password={formData.password} />

          <FormText
            label="Type in your password again"
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

          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="sex" name="sex" value={formData.sex} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth size="small" sx={{ mt: 2 }}>
            <InputLabel id="clientPositionId">Client Position</InputLabel>
            <Select
              labelId="clientPositionId"
              id="clientPositionId"
              name="clientPositionId"
              value={formData.clientPositionId}
              onChange={handleChange}
              label="Client Position"
              error={Boolean(errors.clientPositionId)}
            >
              {clientPositions.map((position) => (
                <MenuItem key={position.value} value={position.value}>
                  {position.label}
                </MenuItem>
              ))}
            </Select>
            <Typography variant="caption" color="error">
              {errors.clientPositionId}
            </Typography>
          </FormControl>

          <FormText label="Agency Name" name="agencyName" value={formData.agencyName} onChange={handleChange} error={errors.agencyName} />

          <FormText
            label="Agency Address"
            name="agencyAddress"
            value={formData.agencyAddress}
            onChange={handleChange}
            error={errors.agencyAddress}
            multiline
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
            Sign Up
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
          Sign Up with Google
        </Button>

        <Typography variant="body2" sx={{ textAlign: 'center', mt: '50px' }}>
          Already Have an account?{' '}
          <Link href="#" onClick={() => console.log('Navigate to registration page')} sx={{ textDecoration: 'none' }}>
            Sign In Here
          </Link>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalRegister;
