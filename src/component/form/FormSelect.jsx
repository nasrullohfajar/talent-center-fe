import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useIsXl } from 'utils/functions';

const FormSelect = ({ spec }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const isXl = useIsXl();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', gap: '10px', mb: '15px', fontSize: '14px', fontFamily: 'Inter, sans-serif', alignItems: 'center' }}>
      <label for="filter">Sort by</label>
      <select
        name="filter"
        id="filter"
        value={selectedOption}
        onChange={handleChange}
        style={{
          border: '1px solid #848484',
          borderRadius: '5px',
          padding: '10px',
          width: isXl ? '300px' : '350px',
          color: '#848484',
          background: 'none',
        }}
      >
        {spec.map((item) => (
          <option value={item.value} style={{ color: 'black' }}>
            {item.label}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default FormSelect;
