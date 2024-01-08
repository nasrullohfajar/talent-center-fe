import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CardTalent from "component/card/CardTalent";

const ContentMain = () => {

    const clientData = [
        {
            name: 'Markus Kotlin',
            status: 'Available',
            experience: '5+',
            level: 'Senior',
            position: ['Android Developer', 'Web Developer'],
            skill: ['Javascipt', 'ReactJS', 'VueJS', 'Kotlin', 'Flutter', 'PHP', 'Laravel']
        }
    ]

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'start',
                minHeight: 'calc(100vh - 15 5px)',
                p: '115px 40px 40px 390px'
            }}
        >
            <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', color: 'black', mb: '20px' }}>
                Showing you 1 - 10 talents out of 15 for <span style={{ fontWeight: '700' }}>"Javascript"</span>
            </Typography>

            <Grid container spacing={3} >
                <Grid item xs={6}>
                    <CardTalent clientData={clientData[0]} />
                </Grid>
                <Grid item xs={6}>
                    <CardTalent clientData={clientData[0]} />
                </Grid>
                <Grid item xs={6}>
                    <CardTalent clientData={clientData[0]} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContentMain;