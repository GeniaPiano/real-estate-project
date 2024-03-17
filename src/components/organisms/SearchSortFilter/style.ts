import {alpha} from "@mui/material/styles";
import {theme} from "../../../assets/theme.ts";

export const style = {
    wrapper: {
        flexDirection: "column",
        marin: 2,
        marginBottom: 2
    },
    accordionWrap: {
        background: alpha(theme.palette.primary.main, 0.1)
    },
    icon: {
        paddingRight: '25px'
    },
    sectionHeader: {
        marginTop: '15px',
        background: theme.palette.grey[200]
    },
    slider: {
        marginTop: '30px'
    }
}

