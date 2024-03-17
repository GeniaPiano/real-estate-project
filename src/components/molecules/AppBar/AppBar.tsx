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
import { CountriesDropdown} from "../../atoms/CountriesDropdown/CountriesDropdown.tsx";
import {style} from "./style.ts";

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

export const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleBoxClick = (path: string) => {
    if (drawerOpen) setDrawerOpen(false);
    navigate(path);
  };

  // @ts-ignore
  return (
    <>
      <Box sx={style.appBarWrapper}>
        <Box
          sx={style.wrapper}
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
          <Grid container spacing={2} sx={style.container}>
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
      </Box>

      {/* Drawer for smaller screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{width: "250px"}}
      >
        <Stack spacing={2} p={2}>
          {pathsData.map((el) => (
            <Box
              key={el.name}
              to={el.path}
              component={Link}
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
