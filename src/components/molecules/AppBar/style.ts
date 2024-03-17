import {theme} from "../../../assets/theme.ts";

export const style = {
    link: {
        color: "inherit",
        cursor: "pointer",
        textDecoration: "none",
        '&:hover': {
            backgroundColor: theme.palette.grey[200]
        }
    },
    activeLink: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
        cursor: "pointer",
        textDecoration: 'underline',
        backgroundColor: "red"
       },
    appBarLogo: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        cursor: "pointer",
        marginRight: "40px",
    },
    wrapper : {
        flex: "1 2",
        display: "flex",
        flexDirection: "row",
    },
    container : {
        flex: 1
    },
    appBarWrapper : {
        maxHeight: "100%",
        height: 80,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid",
        marginBottom: "10px",
        // @ts-ignore
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignContent: "flex-start",
            justifyContent: "flex-start",
            marginBottom: "10px",
        },
        // @ts-ignore
        [theme.breakpoints.down("md")]: {
            flexDirection: "row",
            justifyContent: "space-evenly",
        },
    }
};