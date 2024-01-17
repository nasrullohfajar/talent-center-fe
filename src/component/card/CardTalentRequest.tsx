import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Tabs, Tab } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PropTypes from 'prop-types';
import AvailableStatus from 'component/ui/AvailableStatus';
import TagTalent from 'component/ui/TagTalent';
import EmptyData from 'component/ui/EmptyData';
import talent from 'assets/image/talent.jpg';
import downloadCVGray from 'assets/icon/downloadCVGray.svg';
import { useIsXl, useIsMobile } from 'utils/functions';
import emptyDataWishlit from 'assets/image/emptyDataWishlist.png';
import { ITalentDataProps } from 'component/layout/main/types';
import { ICustomTabPanelProps } from 'component/card/types';

function CustomTabPanel(props: ICustomTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CardTalentRequest = ({ talentData }: ITalentDataProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const isXl = useIsXl();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: isMobile ? '14px' : '23px', mb: '20px' }}>
        My Request
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white', boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab
              label={'All'}
              {...a11yProps(0)}
              sx={{ display: 'flex', width: '25%', textTransform: 'capitalize', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}
            />
            <Tab
              label=" (2) In Progress"
              {...a11yProps(1)}
              sx={{ display: 'flex', width: '25%', textTransform: 'capitalize', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}
            />
            <Tab
              label="(1) Approved"
              {...a11yProps(2)}
              sx={{ display: 'flex', width: '25%', textTransform: 'capitalize', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}
            />
            <Tab
              label="(1) Rejected"
              {...a11yProps(3)}
              sx={{ display: 'flex', width: '25%', textTransform: 'capitalize', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            bgcolor: 'white',
            boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
            my: '30px',
            py: '15px',
            px: '50px',
          }}
        >
          <Box sx={{ mr: '10px' }}>
            <ErrorOutlineOutlinedIcon sx={{ fontSize: '20px', color: '#EBCA1D' }} />
          </Box>
          <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
            All Request is checked by Tujuh Sembilan Admin
          </Typography>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {talentData ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
                bgcolor: 'white',
                borderRadius: '10px',
                p: '30px',
                boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
                boxSizing: 'border-box',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  width: '100%',
                  bgcolor: 'white',
                  px: '30px',
                  boxSizing: 'border-box',
                }}
              >
                <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', mb: '20px' }}>
                  12 September 2022
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    bgcolor: 'white',
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%', gap: '10px' }}>
                    <img src={talent} alt="Talent" style={{ width: '90%', borderRadius: '50%', objectFit: 'cover' }} />
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '60%' }}>
                    <Box>
                      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', mb: '10px' }}>
                        {talentData.status === 'Available' ? <AvailableStatus available={true} /> : <AvailableStatus available={false} />}

                        <Typography
                          variant="body2"
                          sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#2C8AD3', fontSize: isMobile ? '14px' : '23px' }}
                        >
                          {talentData.name}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '10px', alignItems: 'start' }}>
                        <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: '#848484' }}>
                          {talentData.experience} {talentData.experience !== '1' ? ' Years of Experience' : 'Year of Experience'}
                        </Typography>

                        {!isMobile && (
                          <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: '#848484' }}>
                            •
                          </Typography>
                        )}

                        <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: '#848484' }}>
                          {talentData.level} Level
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <TagTalent name={'Position'} tag={talentData.position} />
                    </Box>

                    <Box>
                      <TagTalent name={'Skill Set'} tag={talentData.skill} max={5} />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '20%',
                      gap: '5px',
                      alignItems: 'start',
                      justifyContent: 'center',
                      borderLeft: '1px solid #DBDBDB',
                      pl: '20px',
                    }}
                  >
                    <Button
                      color="inherit"
                      variant="text"
                      sx={{
                        borderRadius: '5px',
                        paddingX: isXl ? '5px' : '20px',
                        paddingY: '5px',
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '700',
                        color: '#2C8AD3',
                        alignItems: 'start',
                      }}
                      onClick={() => {
                        navigate('/talent/detail');
                      }}
                    >
                      <Box sx={{ mr: '5px' }}>
                        <KeyboardArrowRightIcon sx={{ fontSize: '24px' }} />
                      </Box>
                      See Detail
                    </Button>

                    <Button
                      color="inherit"
                      variant="text"
                      sx={{
                        borderRadius: '5px',
                        paddingX: isXl ? '5px' : '20px',
                        paddingY: '5px',
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '700',
                        color: '#848484',
                        alignItems: 'start',
                      }}
                      onClick={() => {}}
                    >
                      <Box sx={{ p: '2px 5px 0px', mr: '5px' }}>
                        <img src={downloadCVGray} alt="icon" width={'14px'} style={{ color: '#848484' }} />
                      </Box>
                      Download CV
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <EmptyData img={emptyDataWishlit} message={'Tidak ada wishlist'} />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Four
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default CardTalentRequest;
