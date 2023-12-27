import React from "react";
import { Box } from '@mui/material';
import Navbar from "../../component/ui/Navbar";
import bgLanding from "../../assets/image/bg-landingPage.svg"
import ButtonLanding from "../../component/ui/ButtonLanding"

const Landing = () => {
    return (
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            <Navbar hasBg={'none'} content={<ButtonLanding />} sx={{ position: 'fixed', width: '100%' }} />
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${bgLanding})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 'calc(100vh - 64px)', // fullscreen - navbar
                    paddingTop: '64px',

                    //overay : membuat bg gelap
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.7)',
                    },
                }}
            >
            </Box>
        </Box>
    );
}

export default Landing;
