import { useEffect, useState } from 'react'
import { propertiesService } from '../../services/PropertiesServices'

export const useProperties = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchProperties = async () => {
      const propertiesFromApi = await propertiesService.fetchAll()
      setProperties(propertiesFromApi)
    }
  fetchProperties()
  }, [])

  return properties
}