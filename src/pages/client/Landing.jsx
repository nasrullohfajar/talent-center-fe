import React from "react";
import { Box } from '@mui/material';

import Navbar from "../../component/landing/Navbar";
import bgLanding from "../../assets/image/bg-landingPage.png";
import Footer from "../../component/landing/Footer";
import Info from "../../component/landing/Info"
import Content from "../../component/landing/Content"

import { useIsMobile } from "../../utils/utils"

const Landing = () => {

    const isMobile = useIsMobile();

    return (
        <>
            <Box sx={{ position: 'relative', minHeight: '100vh' }}>
                <Navbar hasBg={'none'} sx={{ position: 'fixed', width: '100%' }} />
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
