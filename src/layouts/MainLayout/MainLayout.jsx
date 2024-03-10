import { Box } from '@mui/material'
import { AppBar } from '../../components/atoms/AppBar/AppBar'

export const MainLayout = ({ children }) => {
  return (
    <Box>
      <AppBar />
      {children}
    </Box>
  )
}
