import { useState } from 'react'
import { Grid, Typography, Box, Button, Checkbox, FormControlLabel, FormGroup, Accordion, AccordionSummary, AccordionDetails, Slider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TuneIcon from '@mui/icons-material/Tune'
import { usePropertiesStore } from '../../../stores/usePropertiesStore'
import { useTheme, alpha } from '@mui/material/styles'

export  const SearchSortFilter = () => {
  const [selectedCities, setSelectedCities] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [expanded, setExpanded] = useState(false)
  const { properties, setFilter, resetFilters } = usePropertiesStore()
  const theme = useTheme()
  const uniquePropertyCities = [...new Set(properties.map((property) => property.city))]
  const uniquePropertyTypes = [...new Set(properties.map((property) => property.type))]

  const handleSelectCities = (event) => {
    const city = event.target.name;
    setSelectedCities((prevSelectedCities) => {
      const newSelectedCities = event.target.checked
        ? [...prevSelectedCities, city]
        : prevSelectedCities.filter((c) => c !== city)
      setFilter({ cities: newSelectedCities })
      return newSelectedCities
    })  
  }

  const handleSelectTypes = (event) => {
    const type = event.target.name;
    setSelectedTypes((prevSelectedTypes) => {
      const newSelectedTypes = event.target.checked
        ? [...prevSelectedTypes, type]
        : prevSelectedTypes.filter((t) => t !== type)
      setFilter({ types: newSelectedTypes })
      return newSelectedTypes
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
    setSelectedTypes([])
    setSelectedCities([])
    setPriceRange([0, 1000000])
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
        <Box>
          <Typography  sx={{marginTop: '15px', background: theme.palette.secondary.greyLight}} variant="h6"> Price range </Typography>
          <Slider
              sx={{marginTop: '30px'}}
              size="small"
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="on"
              min={0}
              max={1000000}
            /> 
          </Box>

          <Box>
            <Typography  sx={{marginTop: '15px', background: theme.palette.secondary.greyLight}} variant="h6"> Select property type </Typography>  
            <Grid container >           
              {uniquePropertyTypes.map((type) => (
                <Grid item key={type} >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedTypes.includes(type)}
                        onChange={handleSelectTypes}
                        name={type}
                      />}
                    label={type}
                  />
                </Grid>
              ))}
       
           </Grid>  
          </Box>
          <Box>
            <Typography  sx={{marginTop: '15px', background: theme.palette.secondary.greyLight}} variant="h6" > Select cities </Typography>  
              <Grid container>
                 {uniquePropertyCities.map((city) => (
                  <Grid item key={city} >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedCities.includes(city)}
                          onChange={handleSelectCities}
                          name={city}
                        />}
                      label={city}
                    />
                  </Grid>
                ))}            
              </Grid>  
            </Box>
          <Button onClick={applyFilters} size="small" sx={{marginY: "30px", marginRight: '10px'}} variant="contained"> Close </Button>
          <Button onClick={resetFiltersAndCheckbox} color="secondary" size="small" sx={{marginY: "30px"}} variant="contained"> Reset </Button>
        </AccordionDetails>
      </Accordion>       
        { (selectedCities.length > 0 || selectedTypes.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 1000000) && !expanded && 
          <Button onClick={resetFiltersAndCheckbox} sx={{marginTop: "20px"}} color='secondary' variant="contained"> Reset choice </Button>
        }
    </Box>
  )
}