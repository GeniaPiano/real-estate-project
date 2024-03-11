import { Typography, Box } from '@mui/material'

export const TitlePage = ({title}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
      <Typography sx={{fontSize: '22px', fontWeight: 'bold', textAlign: 'center'}}>
        {title}
      </Typography>
    </Box>
  )
}