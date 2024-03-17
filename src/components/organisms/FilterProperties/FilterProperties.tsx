import {ChangeEvent, SyntheticEvent, useState} from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Slider,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TuneIcon from '@mui/icons-material/Tune'
import {usePropertiesStore} from '../../../stores/usePropertiesStore'
import {style} from "./style.ts";
import {FilterPropertiesMessages} from "./messages.ts";

export  const FilterProperties = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000])
  const [selectedTypes, setSelectedTypes] = useState<string[] >([])
  const [expanded, setExpanded] = useState<string | boolean>(false)
  const { properties, setFilter, resetFilters } = usePropertiesStore()
  const uniquePropertyCities = properties ? [...new Set(properties.map((property) => property.city))] : []
  const uniquePropertyTypes = properties ? [...new Set(properties.map((property) => property.type))] : []
  const handleSelectCities = (event: ChangeEvent<HTMLInputElement>) => {
    const city = event.target.name;
    setSelectedCities((prevSelectedCities) => {
      return event.target.checked
          ? [...prevSelectedCities, city]
          : prevSelectedCities.filter((c) => c !== city);
    });
  }
  const handleSelectTypes = (event: ChangeEvent<HTMLInputElement>) => {
    const type = event.target.name;
    setSelectedTypes((prevSelectedTypes) => {
      const newSelectedTypes = event.target.checked
        ? [...prevSelectedTypes, type]
        : prevSelectedTypes.filter((t) => t !== type)
      setFilter({ types: newSelectedTypes })
      return newSelectedTypes
    })
  }
  const handlePriceChange = (
      _event: Event,
      value: number | number[],
       ) => {
    if (Array.isArray(value)) {
      setPriceRange(value as [number, number]);
      setFilter({ priceRange: value as [number, number] });
    }
  };

  const handleChange = (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
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
    <Box sx={style.wrapper}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            sx={style.accordionWrap}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <TuneIcon sx={style.icon}/>
            <Box> {FilterPropertiesMessages.headerTitle} </Box>
        </AccordionSummary>
        <AccordionDetails>  
        <Box>
          <Typography  sx={style.sectionHeader} variant="h6"> {FilterPropertiesMessages.priceRange} </Typography>
          <Slider
              sx={style.slider}
              size="small"
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="on"
              min={0}
              max={1000000}
            /> 
          </Box>

          <Box>
            <Typography  sx={style.sectionHeader} variant="h6"> {FilterPropertiesMessages.selectPropertyType}</Typography>
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
            <Typography  sx={style.sectionHeader} variant="h6" > {FilterPropertiesMessages.selectCities} </Typography>
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
          <Button onClick={applyFilters} size="small" sx={{marginY: "30px", marginRight: '10px'}} variant="contained"> {FilterPropertiesMessages.close} </Button>
          <Button onClick={resetFiltersAndCheckbox} color="secondary" size="small" sx={{marginY: "30px"}} variant="contained"> {FilterPropertiesMessages.resetChoice} </Button>
        </AccordionDetails>
      </Accordion>       
        { (selectedCities.length > 0 || selectedTypes.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 1000000) && !expanded && 
          <Button onClick={resetFiltersAndCheckbox} sx={{marginTop: "20px"}} color='secondary' variant="contained"> {FilterPropertiesMessages.resetChoice} </Button>
        }
    </Box>
  )
}