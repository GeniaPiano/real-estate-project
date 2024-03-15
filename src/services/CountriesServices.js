import axios from 'axios'

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL

export const countriesService = {
  fetchAll: async () => {
    const countriesFromApi = await axios.get(apiUrl)
    const selectedDatCountries = countriesFromApi.data.map((country) => {
      return {
        countryName: country.name.common,
        map: country.maps.googleMaps,
        flag: country.flags.svg
      }
    })
    return selectedDatCountries
  }
}