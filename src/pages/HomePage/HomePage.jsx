import { useEffect, useState } from 'react'
import axios from 'axios'
import { PropertiesList } from '../../components/organisms/PropertiesList/ProperstiesList'
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material'

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL

export const HomePage = () => {
  const [dataCountries, setDataCountries] = useState()
  const [selectedCountry, setSelectedCountry] = useState([])
  const getPropertyCountries = async () => {
    const dataCountriesFromApi = await axios.get(apiUrl)
    const selectedDatCountries = dataCountriesFromApi.data.map((country) => {
      return {
        countryName: country.name.common,
        map: country.maps.googleMaps,
        flag: country.flags.svg
      }
    })
    setDataCountries(selectedDatCountries)
    // console.log(selectedDatCountries)
  }

  useEffect(() => {
    getPropertyCountries()
  }, [])
  return (
    <div>
      <InputLabel id="country-label">Countries</InputLabel>
      <FormControl>
        <Select
          sx={{
            backgroundColor: '#fff',
            width: '300px'
          }}
          size="small"
          className="changeInput"
          labelId="country-label"
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
      <PropertiesList />
    </div>
  )
}
