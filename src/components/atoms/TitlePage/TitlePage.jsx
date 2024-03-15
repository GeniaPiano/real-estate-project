import { Typography, Box, Button } from '@mui/material'
import { PropTypes } from 'prop-types'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { useNavigate } from 'react-router-dom'

export const TitlePage = ({ title, sx, backToHomePage = false }) => {
  const navigate = useNavigate()
  const header = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        marginTop: '30px',
        ...sx
      }}
    >
      <Typography sx={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center', ...sx }}>{title}</Typography>
    </Box>
  )

  const headerWithBackHomeButton = () => (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        ...sx
      }}
    >
      <Button onClick={() => navigate('/')} startIcon={<KeyboardDoubleArrowLeftIcon />} variant="contained">
        Back to list
      </Button>
      <Typography sx={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center', ...sx }}>{title}</Typography>
    </Box>
  )

  return backToHomePage ? headerWithBackHomeButton() : header()
}

TitlePage.prototype = {
  title: PropTypes.string.isRequired,
  sx: PropTypes.object,
  backToHomePage: PropTypes.bool
}
