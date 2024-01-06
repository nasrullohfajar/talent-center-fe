import React from "react";
import { Box } from '@mui/material';

import NavbarLanding from "../../component/layout/NavbarLanding";
import bgLanding from "../../assets/image/bg-landingPage.png";
import Footer from "../../component/layout/Footer";
import Info from "../../component/layout/Info"
import Content from "../../component/layout/Content"

import { useIsMobile } from "../../utils/functions"

const Landing = () => {

    const isMobile = useIsMobile();

    return (
        <>
            <Box sx={{ position: 'relative', minHeight: '100vh' }}>
                <NavbarLanding hasBg={'none'} sx={{ position: 'fixed', width: '100%' }} />
                <Box
                    sx={{
                        position: 'relative',
                        backgroundImage: `url(${bgLanding})`,
                        backgroundSize: 'cover',
                        backgroundPosition: isMobile ? 'left center' : 'center',
                        minHeight: 'calc(100vh - 64px)', // fullscreen - navbar
                    }}
                >
                    <Content />
                </Box>
            </Box>
            <Info />
            <Footer />
        </ >
    );
}

export default Landing;
