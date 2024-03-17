import {createTheme, ThemeOptions} from "@mui/material/styles";

const themeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#0aa4a8",
            dark: "#000000",
            light: "#ffffff",
        },
        secondary: {
            main: "#f50057",
            light: "#B5B5B5",
            dark: "#767373",
            contrastText: "#1A1A1A",
        },
        warning: {
            main: "#767373"
        },
    },
};

export const theme = createTheme(themeOptions);
