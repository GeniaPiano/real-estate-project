import { useState, useEffect } from 'react'
import { countriesService } from '../../services/CountriesServices'

export const useCountries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
      const fetchCountries = async () => {
      const countriesFromApi = await countriesService.fetchAll()
      setCountries(countriesFromApi)
      }
    fetchCountries()  
    }, [])

    return countries
}