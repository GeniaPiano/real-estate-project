import {Typography, Box, Button} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import {useNavigate} from "react-router-dom";
import {TitlePageProps} from "./types.ts";
import {style} from "./style.ts";
import {titlePageMessages} from "./messages.ts";

export const TitlePage = ({title, backToHomePage = false}: TitlePageProps) => {
    const navigate = useNavigate();
    const header = () => (
        <Box sx={style.wrapperCenter} >
            <Typography sx={style.text}>
                {title}
            </Typography>
        </Box>
    );

    const headerWithBackHomeButton = () => (
        <Box
            sx={style.wrapperColumn}
        >
            <Button
                onClick={() => navigate("/")}
                startIcon={<KeyboardDoubleArrowLeftIcon/>}
                variant="contained"
            >
                {titlePageMessages.buttonMessage}
            </Button>
            <Typography
                sx={style.text}
            >
                {title}
            </Typography>
        </Box>
    );

    return backToHomePage ? headerWithBackHomeButton() : header();
};

