import { Typography, Box } from '@mui/material'
import { PropTypes } from 'prop-types'

export const TitlePage = ({title, sx}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px',  sx}}>
      <Typography sx={{fontSize: '22px', fontWeight: 'bold', textAlign: 'center', ...sx}}>
        {title}
      </Typography>
    </Box>
  )
}

TitlePage.prototype = {
  title: PropTypes.string.isRequired,
  sx: PropTypes.object
}
