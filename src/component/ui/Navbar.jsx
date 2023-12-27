import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import logotujuhsembilan from '../../assets/image/logotujuhsembilan.svg';
import { useIsMobile } from "../../utils/utils";

const Navbar = ({ content, bgColor, hasBg }) => {
    const isMobile = useIsMobile();

    return (
        <Box sx={{ position: 'fixed', width: '100%', zIndex: 99 }}>
            <AppBar position="static" sx={{ background: hasBg, backgroundColor: bgColor, boxShadow: 'none', paddingX: '20px', paddingY: '10px' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <img src={logotujuhsembilan} alt="Logo" style={{ width: '50px' }} />
                        </IconButton>
                        <Typography variant="h6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '700', marginLeft: '5px', display: isMobile ? 'none' : 'block' }}>
                            Talent Center 79
                        </Typography>
                    </Box>

                    {content}
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;
