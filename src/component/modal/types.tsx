import React from 'react';

export interface IModalAuthProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface ICustomAlertProps {
  open: boolean;
  type: string;
  message: string;
}
