import React from "react"
import { Box, Typography } from "@mui/material"
import { useTheme,  alpha } from "@mui/material/styles"

export const NotFoundProperties = ({message}) => {
  const theme = useTheme()
  return (
    <Box  sx={{background: alpha(theme.palette.secondary.main, 0.2), borderRadius: '10px', paddingY: '50px', marginTop: '20px'}}>
      <Typography variant="h5" sx={{textAlign: 'center', color: theme.palette.secondary.greyDark}}>
        {message}
      </Typography> 
     </Box>
  )
}