import { Box } from '@mui/material'
import { AppBar } from '../../components/atoms/AppBar/AppBar'

export const MainLayout = ({ children }) => {
  return (
    <Box sx={{ padding: '5px 20px' }}>
      <AppBar />
      <Box>{children}</Box>
    </Box>
  )
}
