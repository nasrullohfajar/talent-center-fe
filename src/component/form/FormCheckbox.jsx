import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const FormCheckbox = ({ list, onChange }) => {
  const formControlLabelStyle = {
    '& .MuiFormControlLabel-label': {
      fontSize: '14px',
    },
  };

  return list.map((item) => (
    <FormControlLabel
      key={item.value}
      control={<Checkbox value={item.value} checked={item.isChecked} onChange={onChange} sx={{ p: '0px', m: '0px', ml: '20px', color: '#AFAFAF' }} />}
      label={item.label}
      sx={{ display: 'flex', flexDirection: 'row', gap: '5px', ...formControlLabelStyle }}
    />
  ));
};

export default FormCheckbox;
