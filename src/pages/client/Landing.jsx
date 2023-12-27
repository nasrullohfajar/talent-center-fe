import React from "react";
import { Box } from '@mui/material';
import Navbar from "../../component/layout/Navbar";
import bgLanding from "../../assets/image/bg-landingPage.png";
import ButtonLanding from "../../component/landing/ButtonLanding";
import Footer from "../../component/layout/Footer";
import Info from "../../component/layout/Info"
import Content from "../../component/landing/Content"

const Landing = () => {
    return (
        <>
            <Box sx={{ position: 'relative', minHeight: '100vh' }}>
                <Navbar hasBg={'none'} content={<ButtonLanding />} sx={{ position: 'fixed', width: '100%' }} />
                <Box
                    sx={{
                        position: 'relative',
                        backgroundImage: `url(${bgLanding})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
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
