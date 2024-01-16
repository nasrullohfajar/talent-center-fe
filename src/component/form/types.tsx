import React, { ChangeEvent, ReactNode } from 'react';
import { InputProps, SelectChangeEvent } from '@mui/material';

export interface IFormAuthProps {
  email: string;
  password: string;
  [key: string]: string;
}

export interface IFormRegisterProps {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  sex: string;
  birthdate: string;
  clientPositionId: string;
  agencyName: string;
  agencyAddress: string;
  [key: string]: string;
}

export interface IFormInputProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  multiline?: boolean;
  type?: string;
  inputProps?: InputProps;
}
