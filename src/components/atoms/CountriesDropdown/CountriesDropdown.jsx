import { Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material'
import { useCountries } from './../../../hooks/useCountries/useCountries'
import { useState } from 'react'


export const CountriesDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const dataCountries = useCountries()
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  }

  return (
   <Box>
       <FormControl>
        <Select
          sx={{
            backgroundColor: '#fff',
            width: '300px'
          }}
          size="small"
          className="changeInput"
          labelId="country-label"
          value={selectedCountry}
          onChange={handleChange}
        >
          {dataCountries &&
            dataCountries.map((el, index) => (
              <MenuItem
                  sx={{
                  backgroundColor: '#fff',
                  width: '300px'
                }}
                key={index}
              >
                {el.countryName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    
   </Box>
  )
}