import React from "react";
import { Box, Button } from "@mui/material";

const Tag = ({ type, color, width, name }) => {
    {
        if (type == 'button') {
            return (
                <Box sx={{ marginX: '5px' }}>
                    <Button
                        variant="text"
                        sx={{
                            borderRadius: '3px',
                            paddingX: '5px',
                            paddingY: '2px',
                            fontSize: '12px',
                            textTransform: 'capitalize',
                            fontFamily: 'Inter, sans-serif',
                            color: color ? color : 'black',
                            backgroundColor: color ? color : 'white',
                            width: width
                        }}>
                        {name}
                    </Button>
                </Box>
            )
        }
    }
}

export default Tag;