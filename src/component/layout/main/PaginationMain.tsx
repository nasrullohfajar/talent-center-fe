import React, { useState } from 'react';
import { Pagination, Box, Button, Typography } from '@mui/material';

const PaginationMain = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(1);
  };

  // Dummy data
  const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

  return (
    <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between', mt: '30px', mb: '20px', color: '#848484' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
          Entries
        </Typography>
        <Button
          variant={rowsPerPage === 10 ? 'contained' : 'text'}
          onClick={() => handleChangeRowsPerPage(10)}
          size="small"
          style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}
        >
          10
        </Button>
        <Button
          variant={rowsPerPage === 20 ? 'contained' : 'text'}
          onClick={() => handleChangeRowsPerPage(20)}
          sx={{ color: rowsPerPage === 20 ? 'white' : '#848484' }}
          style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}
        >
          20
        </Button>
        <Button
          variant={rowsPerPage === 30 ? 'contained' : 'text'}
          onClick={() => handleChangeRowsPerPage(30)}
          sx={{ color: rowsPerPage === 30 ? 'white' : '#848484' }}
          style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}
        >
          30
        </Button>
      </Box>

      <Pagination count={Math.ceil(data.length / rowsPerPage)} page={page} onChange={handleChangePage} color="primary" shape="rounded" />
    </Box>
  );
};

export default PaginationMain;
