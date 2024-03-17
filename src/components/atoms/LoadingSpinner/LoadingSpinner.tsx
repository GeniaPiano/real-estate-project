import { Box, CircularProgress, Typography } from '@mui/material';
import {style} from "./style.ts";
import {messages} from "./messages.ts";
export const LoadingSpinner = () => (
  <Box sx={style.wrapper}>
        <CircularProgress />
        <Typography> {messages.loading} </Typography>
  </Box>
)