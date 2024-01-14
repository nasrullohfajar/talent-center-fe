import React, { ReactNode } from 'react';
import { DrawerProps, PaperProps, SxProps } from '@mui/material';

export interface IMobileMenuProps {
  isOpen: boolean;
  handleClose: () => void;
  anchor: DrawerProps['anchor'];
  paperProps?: PaperProps;
  buttonTop?: ReactNode;
  buttonBottom?: ReactNode;
  sx?: SxProps;
}
