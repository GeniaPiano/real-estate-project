import { Box } from '@mui/material'
import { AppBar } from '../../components/molecules/AppBar/AppBar'

export const MainLayout = ({ children }) => {
  return (
    <Box sx={{ padding: '10px 30px' }}>
      <AppBar />
      <Box>{children}</Box>
    </Box>
  )
}
