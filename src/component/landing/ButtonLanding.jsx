import React from "react";
import { Box, Button } from "@mui/material";

const ButtonLanding = () => {
    return (
        <Box sx={{ display: 'flex', gap: '10px' }}>
            <Button color="inherit" variant="text" sx={{ borderRadius: '25px', paddingX: '20px', paddingY: '7px', fontSize: '14px', textTransform: 'capitalize', fontFamily: 'Inter, sans-serif' }}>Register</Button>
            <Button color="inherit" variant="text" sx={{ borderRadius: '25px', border: '1px solid white', paddingX: '20px', paddingY: '7px', fontSize: '14px', textTransform: 'capitalize', fontFamily: 'Inter, sans-serif' }}>Sign In</Button>
        </Box>
    )
}

export default ButtonLanding;