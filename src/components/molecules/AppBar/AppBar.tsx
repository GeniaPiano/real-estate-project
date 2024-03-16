import styled from "@emotion/styled";
import { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Drawer,
  IconButton,
  Hidden,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { CountriesDropdown } from "../../atoms/CountriesDropdown/CountriesDropdown";

const style = {
  link: {
    color: "inherit",
    cursor: "pointer",
    textDecoration: "none",
  },
  appBarLogo: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    cursor: "pointer",
    marginRight: "40px",
  },
};

const pathsData = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Account",
    path: "/account",
    icon: <AccountCircleIcon />,
  },
  { name: "Post ad", path: "/post-ad", icon: <PostAddIcon /> },
];

const AppBarWrapper = styled(Box)(({ theme }) => ({
  maxHeight: "100%",
  height: 80,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  borderBottom: "1px solid",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    marginBottom: "10px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));

export const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleBoxClick = (path) => {
    if (drawerOpen) setDrawerOpen(false);
    navigate(path);
  };

  return (
    <>
      <AppBarWrapper>
        <Box
          sx={{
            flex: "1 2",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h6"
            style={style.appBarLogo}
            onClick={() => handleBoxClick("/")}
          >
            Real estate
          </Typography>
          <CountriesDropdown />
          {/* Hamburger menu */}
          <Hidden smUp>
            <Grid item xs={2} sm={1}>
              <IconButton onClick={toggleDrawer} size="large" color="inherit">
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Grid>
          </Hidden>
        </Box>

        {/* Menu items */}
        <Hidden smDown>
          <Grid container spacing={2} sx={{ flex: "1" }}>
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
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        width="250px"
      >
        <Stack spacing={2} p={2}>
          {pathsData.map((el) => (
            <Box
              key={el.name}
              to={el.path}
              style={style.link}
              onClick={() => handleBoxClick(el.path)}
            >
              <Stack direction="row" spacing={1}>
                {el.icon}
                <Box>{el.name}</Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};
