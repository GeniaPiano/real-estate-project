import {theme} from "../../../assets/theme.ts";
import {alpha} from "@mui/material/styles";

export const style =  {
    text: {
        textAlign: 'center',
        color: theme.palette.secondary.greyDark
   },
    wrapper: {
        background: alpha(theme.palette.secondary.main, 0.2), borderRadius: '10px', paddingY: '50px', marginTop: '20px'
    }
}