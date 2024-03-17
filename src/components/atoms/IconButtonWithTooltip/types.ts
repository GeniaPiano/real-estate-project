import React from "react";
import {TooltipProps} from "@mui/material/Tooltip";
import {IconButtonProps} from "@mui/material/IconButton";

export interface IconButtonWithTooltipProps {
    icon: React.ReactNode;
    title: TooltipProps['title'];
    ariaLabel: string;
    handleClick: () => void;
    color?: IconButtonProps['color'];
    disabled?: boolean;
 }