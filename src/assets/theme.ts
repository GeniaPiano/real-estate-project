import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#0aa4a8",
      green: "#27d07d",
      black: "#000000",
      white: "#ffffff",
      blue: "#0992ee96",
    },
    secondary: {
      main: "#f50057",
      grey: "#B5B5B5",
      greyLight: "#EBEBEB",
      greyDark: "#767373",
      anthracite: "#1A1A1A",
    },
  },
};

export const theme = createTheme(themeOptions);
