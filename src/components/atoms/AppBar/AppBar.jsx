import styled from '@emotion/styled'
import { useState } from 'react'
import { Box, Grid, Stack, Drawer, IconButton, Hidden } from '@mui/material'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PostAddIcon from '@mui/icons-material/PostAdd'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const style = {
  link: {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer'
  },
  appBarLogo: {
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
}

const pathsData = [
  {
    name: 'Home',
    path: '/',
    icon: <HomeIcon />
  },
  {
    name: 'Account',
    path: '/account',
    icon: <AccountCircleIcon />
  },
  { name: 'Post ad', path: '/post-ad', icon: <PostAddIcon /> }
]

const AppBarWrapper = styled(Box)(({ theme }) => ({
  maxHeight: '100%',
  height: 100,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px 20px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignContent: 'flex-start'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
}))

export const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      <AppBarWrapper>
        <Box
          sx={{
            flex: '1 2',
            ...style.appBarLogo
          }}
        >
          {/* Hamburger menu */}
          <Hidden smUp>
            <Grid item xs={2} sm={1}>
              <IconButton onClick={toggleDrawer} size="large" color="inherit">
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Grid>
          </Hidden>
          Real estate
        </Box>
        {/* Menu items */}
        <Hidden smDown>
          <Grid container spacing={2} sx={{ flex: '1' }}>
            {pathsData.map((el) => (
              <Grid key={el.name} item xs={12} sm={4} md={4} lg={4}>
                <Link to={el.path} style={style.link}>
                  <Stack direction="row" spacing={1}>
                    {el.icon}
                    <Hidden mdDown>
                      <Box>{el.name}</Box>
                    </Hidden>
                  </Stack>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </AppBarWrapper>

      {/* Drawer for smaller screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Stack spacing={2} p={2}>
          {pathsData.map((el) => (
            <Link key={el.name} to={el.path} style={style.link} onClick={() => toggleDrawer}>
              <Stack direction="row" spacing={1}>
                {el.icon}
                <Box>{el.name}</Box>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  )
}
