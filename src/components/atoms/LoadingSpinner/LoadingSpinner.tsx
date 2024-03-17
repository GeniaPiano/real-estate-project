import { Box, CircularProgress, Typography } from '@mui/material';
import {style} from "./style.ts";

export const LoadingSpinner = () => (
  <Box sx={style.wrapper}>
        <CircularProgress />
        <Typography>Loading... </Typography>    
  </Box>
)