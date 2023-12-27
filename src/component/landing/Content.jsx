import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "../ui/SearchBar"
import Tag from "../ui/Tag"
import { useIsMobile } from "../../utils/utils";

const Content = () => {

    const isMobile = useIsMobile();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                gap: '50px',
            }}
        >

            <Typography variant="h4" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: 'white', textAlign: 'center' }}>
                Welcome to <br />
                Talent Center 79
            </Typography>

            <SearchBar />

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2px', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: 'small', fontWeight: '700', color: 'white', textDecoration: 'none' }} className="text">Popular</Typography>
                <Tag type={'button'} name={'Javascript'} />
                <Tag type={'button'} name={'Scrum Master'} />
                <Tag type={'button'} name={'ReactJS'} />
                <Tag type={'button'} name={'Web Front-End Developer'} />
                <Tag type={'button'} name={'VueJS'} />
            </Box>



        </Box>
    );
}

export default Content;