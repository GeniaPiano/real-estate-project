import styled from '@emotion/styled'
import { Box, Stack } from '@mui/material'
import {Link} from 'react-router-dom'

const pathsData = [{
  name: 'Login', path: '/login', icon:  }, {name: 'Login', path
}]

const AppBarWrapper = styled(Box)(() => ({
  maxHeight: '100%',
  height: 65,
  display: 'flex',
  alignItems: 'center'
}))

export const AppBar = () => {
  return (
    <AppBarWrapper>
      <Box> Real estate </Box>
      <Stack>  </Stack>
    </AppBarWrapper>
  )
}
