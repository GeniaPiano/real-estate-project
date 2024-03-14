import { IconButton, Tooltip } from '@mui/material'
import { PropTypes } from 'prop-types'

export const IconButtonWithTooltip = ({icon, title, ariaLabel, handleClick, color, disabled = false}) => {

  const button = (
    <IconButton
      aria-label={ariaLabel}
      onClick={handleClick}
      color={color || 'default'}
      disabled={disabled}
      variant="contained"
    >
      {icon}
    </IconButton>
  )

return (
    <Tooltip title={title}>
      <span>{button}</span>
    </Tooltip>
  )
}

IconButtonWithTooltip.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool
}