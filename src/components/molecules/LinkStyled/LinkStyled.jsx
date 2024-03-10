import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const LinkStyled = styled('div')(({ name, to }) => {
  return (
    <Box as={Link} path={to}>
      {name}
    </Box>
  )
})
