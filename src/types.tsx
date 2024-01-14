import React, { ReactNode, ChangeEvent } from 'react';
import { DrawerProps, PaperProps, SxProps, InputProps } from '@mui/material';

export interface IMobileMenuProps {
  isOpen: boolean;
  handleClose: () => void;
  anchor: DrawerProps['anchor'];
  paperProps?: PaperProps;
  buttonTop?: ReactNode;
  buttonBottom?: ReactNode;
  sx?: SxProps;
}

export interface IModalAuthProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface IFormAuthProps {
  email: string;
  password: string;
  [key: string]: string;
}

export interface ICustomAlertProps {
  open: boolean;
  type: string;
  message: string;
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
