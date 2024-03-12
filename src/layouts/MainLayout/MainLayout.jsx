import { Box } from '@mui/material'
import { AppBar } from '../../components/molecules/AppBar/AppBar'

export const MainLayout = ({ children }) => {
  return (
    <Box sx={{ padding: '10px 20px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar />
      <Box>{children}</Box>
    </Box>
  )
}
