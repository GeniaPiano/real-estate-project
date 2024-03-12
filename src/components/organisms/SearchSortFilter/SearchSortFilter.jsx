import { useState } from 'react'
import { Grid, Typography, Box, Button, Checkbox, FormControlLabel, FormGroup, Accordion, AccordionSummary, AccordionDetails, Slider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TuneIcon from '@mui/icons-material/Tune'
import { usePropertiesStore } from '../../../stores/usePropertiesStore'
import { useTheme, alpha } from '@mui/material/styles'

export  const SearchSortFilter = () => {
  const [selectedCities, setSelectedCities] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [expanded, setExpanded] = useState(false)
  const { properties, setFilter, resetFilters } = usePropertiesStore()
  const theme = useTheme()
  const uniqueCities = [...new Set(properties.map((property) => property.city))]
  
  const handleCityChange = (event) => {
    const city = event.target.name;
    setSelectedCities((prevSelectedCities) => {
      const newSelectedCities = event.target.checked
        ? [...prevSelectedCities, city]
        : prevSelectedCities.filter((c) => c !== city)
      setFilter({ cities: newSelectedCities })
      return newSelectedCities
    })  
  }
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue)
    setFilter({ priceRange: newValue })
  }
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)  }

  const applyFilters = () => {
    setFilter({ cities: selectedCities })
    setExpanded(false)  }

  const resetFiltersAndCheckbox = () => {
    resetFilters()
    setSelectedCities([])
  }
   
  return (
    <Box direction="column" spacing={2} marginBottom={2}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            sx={{background: alpha(theme.palette.primary.main, 0.1) }} 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <TuneIcon sx={{paddingRight: '25px'}}/>
            <Box> Filter and sort </Box>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="h6"> Price range </Typography>
        <Slider
            sx={{marginY: '30px'}}
            size="small"
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="on"
            min={0}
            max={1000000}
          /> 

          
        <Typography variant="h6"> Select cities </Typography>  
        <Grid container>
         <FormGroup>
          {uniqueCities.map((city) => (
            <Grid item key={city} >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCities.includes(city)}
                    onChange={handleCityChange}
                    name={city}
                  />
                }
                label={city}
              />
            </Grid>
          ))}
        </FormGroup>
        </Grid>  
          
       
      <Button onClick={applyFilters} size="small" sx={{marginTop: "10px", marginRight: '10px'}} variant="contained"> x </Button>
      <Button onClick={resetFiltersAndCheckbox} size="small" sx={{marginTop: "10px"}} variant="contained"> Reset </Button>
        </AccordionDetails>
      </Accordion>       
     {selectedCities.length > 0 && !expanded && <Button onClick={resetFiltersAndCheckbox} sx={{marginTop: "10px"}} variant="contained"> Reset choice </Button>}
    </Box>
  )
}