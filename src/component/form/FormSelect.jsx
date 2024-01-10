import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useIsXl, useIsMobile } from 'utils/functions';

const FormSelect = ({ spec, sx }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const isXl = useIsXl();
  const isMobile = useIsMobile();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', gap: '10px', mb: '15px', fontSize: '14px', fontFamily: 'Inter, sans-serif', alignItems: 'center', ...sx }}>
      {!isMobile && <label htmlFor="filter">Sort by</label>}
      <select
        name="filter"
        id="filter"
        value={selectedOption}
        onChange={handleChange}
        style={{
          border: '1px solid #848484',
          borderRadius: '5px',
          padding: '10px',
          width: isMobile ? '100%' : isXl ? '300px' : '350px',
          color: '#848484',
          background: 'none',
        }}
      >
        <option value="" disabled hidden>
          Sort By
        </option>

        {spec.map((item) => (
          <option key={item.value} value={item.value} style={{ color: 'black' }}>
            {item.label}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default FormSelect;
