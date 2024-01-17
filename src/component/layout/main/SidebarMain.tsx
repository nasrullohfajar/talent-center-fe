import React from 'react';
import { Box, Typography } from '@mui/material';
import FilterCheckbox from 'component/ui/FilterCheckbox';
import FilterIcon from '../../../assets/icon/filter.svg';

const SidebarMain = () => {
  const positionSpec = [
    { value: 'scrumMaster', isChecked: false, label: 'Scrum Master' },
    { value: 'analyst', isChecked: false, label: 'Analyst' },
    { value: 'frontend', isChecked: false, label: 'Web Front-End Developer' },
  ];

  const yearExperienceSpec = [
    { value: '5', isChecked: false, label: '5+ Years of Experience' },
    { value: '2', isChecked: false, label: '2 - 4 Years of Experience' },
    { value: '1', isChecked: false, label: '1 Year of Experience' },
  ];

  const levelSpec = [
    { value: 'junior', isChecked: false, label: 'Junior' },
    { value: 'senior', isChecked: false, label: 'Senior' },
  ];

  const frameworkSpec = [
    { value: 'springboot', isChecked: false, label: 'Spring Boot' },
    { value: 'laravel', isChecked: false, label: 'Laravel' },
    { value: 'django', isChecked: false, label: 'Django' },
  ];

  const programmingLanguageSpec = [
    { value: 'c#', isChecked: false, label: 'C#' },
    { value: 'java', isChecked: false, label: 'Java' },
    { value: 'php', isChecked: false, label: 'PHP' },
  ];

  const developmentToolsSpec = [
    { value: 'katalon', isChecked: false, label: 'Katalon' },
    { value: 'selenium', isChecked: false, label: 'Selenium' },
    { value: 'figma', isChecked: false, label: 'Figma' },
  ];

  const talentAvailabilitySpec = [
    { value: 'available', isChecked: false, label: 'Available' },
    { value: 'notavailable', isChecked: false, label: 'Not Available' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        height: '100vh',
        gap: '50px',
        bgcolor: 'white',
        boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
        overflow: 'auto',
        zIndex: 10,
        position: 'fixed',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', p: '40px', pt: '110px', gap: '10px', color: '#212121' }}>
        <Box sx={{ display: 'flex', mb: '10px' }}>
          <img src={FilterIcon} alt="" style={{ width: '18px' }} />
          <Typography
            variant="body2"
            sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', textAlign: 'center', fontSize: '18px', ml: '10px' }}
          >
            Filter
          </Typography>
        </Box>

        <FilterCheckbox name={'Postition'} spec={positionSpec} />

        <FilterCheckbox name={'Years of Experience'} spec={yearExperienceSpec} />

        <FilterCheckbox name={'Level'} spec={levelSpec} />

        <FilterCheckbox name={'Framework'} spec={frameworkSpec} />

        <FilterCheckbox name={'Programming Language'} spec={programmingLanguageSpec} />

        <FilterCheckbox name={'Development Tools'} spec={developmentToolsSpec} />

        <FilterCheckbox name={'Talent Availability'} spec={talentAvailabilitySpec} />
      </Box>
    </Box>
  );
};

export default SidebarMain;
