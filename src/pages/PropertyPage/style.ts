import {theme} from "../../assets/theme.ts";
import { CSSProperties} from "react";

export const style: { [key: string]: CSSProperties }  = {
    name: {
        fontSize: "20px",
        fontWeight: "bold",
    },
    price: {
        fontSize: "18px",
    },
    city: {
        fontSize: "16px",
    },
    surface: {
        fontSize: "16px",
    },
    description: {
        fontSize: "16px",
    },
    cardMedia: {
        width: "90%",
        maxHeight: 300,
        objectFit: "cover" as const
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover" as  const
    },
    wrapper: {
        border: `${theme.palette.divider} 1px solid`,
        width: "100%",
        margin: "10px 0",
        backgroundColor: theme.palette.grey[100],
        padding: 1
    },
    gridOne: {
        padding: "10px"
    },
    gridTwo: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    }
};