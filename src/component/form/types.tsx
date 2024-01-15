import React, { ChangeEvent } from 'react';
import { InputProps } from '@mui/material';

export interface IFormAuthProps {
  email: string;
  password: string;
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
