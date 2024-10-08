import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormCheckbox from 'component/form/FormCheckbox';
import { IFilterSpecProps } from 'component/form/types';

const FilterCheckbox = ({ name, spec }: IFilterSpecProps) => {
  const [isShowFilter, setIsShowFilter] = useState(true);

  const handleOpenChange = () => {
    setIsShowFilter(!isShowFilter);
  };

  return (
    <>
      {isShowFilter ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', borderBottom: '1px solid #DBDBDB', pb: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', textAlign: 'center', my: '5px' }}>
              {name}
            </Typography>

            <IconButton edge="end" color="inherit" aria-label="close" onClick={handleOpenChange} sx={{ p: '0px', ml: 'auto' }}>
              <ExpandLessIcon />
            </IconButton>
          </Box>

          <FormCheckbox spec={spec} />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', borderBottom: '1px solid #DBDBDB', pb: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', textAlign: 'center', mt: '5px' }}>
              {name}
            </Typography>

            <IconButton edge="end" color="inherit" aria-label="close" onClick={handleOpenChange} sx={{ p: '0px', ml: 'auto' }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FilterCheckbox;
