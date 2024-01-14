import React from 'react';
import { Box, Button } from '@mui/material';

interface TagProps {
  type: string;
  color?: string;
  width?: string;
  name: string;
  hover?: boolean;
}

const Tag = ({ type, color, width, name, hover }: TagProps) => {
  if (type === 'button') {
    return (
      <Box sx={{ m: '5px' }}>
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
            width: width,
            '&:hover': {
              backgroundColor: hover ? color : 'lightgray',
            },
          }}
        >
          {name}
        </Button>
      </Box>
    );
  } else {
    return <></>;
  }
};

export default Tag;
