import { Select, MenuItem, FormControl, Box, SelectChangeEvent } from '@mui/material'
import { useCountries } from '../../../hooks/useCountries/useCountries'
import { useState } from 'react'
import { CountryName } from './types.ts'
import { style } from './style.ts'

export const CountriesDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState < CountryName > ('')
  const { countries, loading, error } = useCountries()
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value)
  }

  return (
      <Box>
        <FormControl>
          <Select
              sx={style.select}
              size="small"
              className="changeInput"
              labelId="country-label"
              value={selectedCountry}
              onChange={handleChange}
              defaultValue="select country"
          >
            {!loading &&
                !error &&
                countries &&
                countries.map((el, index) => (
                    <MenuItem sx={style.select} value={el.countryName} key={index}>
                      {el.countryName}
                    </MenuItem>
                ))}
          </Select>
        </FormControl>
      </Box>
  )
}
