import React, { ChangeEvent } from 'react';
import { InputProps, SxProps } from '@mui/material';

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

export interface IFilterSpecProps {
  spec: Array<{ value: string; label: string; isChecked?: boolean }>;
  sx?: SxProps;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
