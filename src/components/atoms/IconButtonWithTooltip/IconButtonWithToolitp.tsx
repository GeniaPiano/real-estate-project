import {FC} from "react";
import { IconButton, Tooltip } from '@mui/material';
import {IconButtonWithTooltipProps} from "./types.ts";

export const IconButtonWithTooltip: FC<IconButtonWithTooltipProps> = ({
  icon,
  title,
  ariaLabel,
  handleClick,
  color = 'default',
  disabled = false,
}) => {
  const button = (
    <IconButton
      aria-label={ariaLabel}
      onClick={handleClick}
      color={color || "default"}
      disabled={disabled}
    >
      {icon}
    </IconButton>
  );

  return (
    <Tooltip title={title}>
      <span>{button}</span>
    </Tooltip>
  );
};

