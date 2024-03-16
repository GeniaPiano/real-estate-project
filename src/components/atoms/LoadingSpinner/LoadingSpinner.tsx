import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material';

export const LoadingSpinner = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px', flexDirection: 'column' }}>
        <CircularProgress />
        <Typography>Loading... </Typography>    
  </Box>
)