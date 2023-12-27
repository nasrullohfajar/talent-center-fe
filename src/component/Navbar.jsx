import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import logotujuhsembilan from '../assets/image/logotujuhsembilan.svg';
import { useIsMobile } from "utils/utils";

const Navbar = () => {
    const isMobile = useIsMobile();

    return (
        <Box sx={{ position: 'fixed', width: '100%', zIndex: 99 }}>
            <AppBar position="static" sx={{ background: 'none', boxShadow: 'none', paddingX: '20px', paddingY: '10px' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <img src={logotujuhsembilan} alt="Logo" style={{ width: '50px' }} />
                        </IconButton>
                        <Typography variant="h6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '700', marginLeft: '5px', display: isMobile ? 'none' : 'block' }}>
                            Talent Center 79
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Button color="inherit" sx={{ borderRadius: '25px', paddingX: '20px', paddingY: '7px', fontSize: '14px', textTransform: 'capitalize' }}>Register</Button>
                        <Button color="inherit" sx={{ borderRadius: '25px', border: '1px solid white', paddingX: '20px', paddingY: '7px', fontSize: '14px', textTransform: 'capitalize' }}>Sign In</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
