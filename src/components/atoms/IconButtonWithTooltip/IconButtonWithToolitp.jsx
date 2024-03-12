import { IconButton, Tooltip } from '@mui/material'
import { PropTypes } from 'prop-types'

export const IconButtonWithTooltip = ({icon, title, ariaLabel, handleClick, color, disabled = false}) => {

return (
    <Tooltip title={title}>
      <IconButton 
          aria-label={ariaLabel}  
          onClick={handleClick}  
          color={color || "primary"} 
          variant="contained" 
          disabled={disabled}>
        {icon}
      </IconButton>
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