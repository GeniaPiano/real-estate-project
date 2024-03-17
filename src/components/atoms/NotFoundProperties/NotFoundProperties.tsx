import { Box, Typography } from "@mui/material"
import {Message} from "./types.ts";
import {style} from "./style.ts";


export const NotFoundProperties = ({message}: Message) => {
  return (
    <Box  sx={style.wrapper}>
      <Typography variant="h5" sx={style.text}>
        {message}
      </Typography> 
     </Box>
  )
}