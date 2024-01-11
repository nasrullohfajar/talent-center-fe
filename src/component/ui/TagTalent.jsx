import React from 'react';
import { Box, Typography } from '@mui/material';
import { useIsXl, useIsMobile } from 'utils/functions';

const TagTalent = ({ name, tag, max }) => {
  const isXl = useIsXl();
  const isMobile = useIsMobile();
  const maxTagsToShow = max ? max : isXl ? 3 : 4;

  const displayTags = tag.slice(0, maxTagsToShow);
  const remainingTags = tag.slice(maxTagsToShow);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: isMobile ? '14px' : '18px' }}>
        {name}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap' }}>
        {displayTags.map((item) => (
          <Box key={item} sx={{ bgcolor: '#E4EEF6', px: '10px', py: '5px', borderRadius: '3px' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
              {item}
            </Typography>
          </Box>
        ))}

        {remainingTags.length > 0 && (
          <Box sx={{ bgcolor: '#E4EEF6', px: '10px', py: '5px', borderRadius: '3px' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
              +{remainingTags.length}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TagTalent;
