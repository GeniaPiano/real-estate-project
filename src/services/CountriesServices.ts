import axios from 'axios'

import {Country, CountryFromApi} from "../types/Country.ts";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL

export const countriesService = {
  fetchAll: async () :Promise<Country[]> => {
    const countriesFromApi = await axios.get<CountryFromApi[]>(apiUrl)
    const selectedDatCountries: Country[] = countriesFromApi.data.map((country) => {
      return {
        countryName: country.name.common,
        map: country.maps.googleMaps,
        flag: country.flags.svg
      }
    } )
    return selectedDatCountries as Country[]
  }
}