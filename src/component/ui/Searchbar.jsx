import React from "react";
import { TextField, InputAdornment, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useIsMobile } from "../../utils/functions";

const SearchBar = () => {

    const isMobile = useIsMobile();

    const handleSearch = (event) => {
        // Implement your search logic here
        console.log("Search query:", event.target.value);
    };

    return (
        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: isMobile ? '80% ' : 600, borderRadius: '30px' }}>
            <TextField
                fullWidth
                placeholder='   Try "Javascript"'
                variant="outlined"
                onChange={handleSearch}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end" size="large">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Paper>
    );
}

export default SearchBar;