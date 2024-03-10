import { useState, useEffect } from 'react'
import { List, ListItem } from '@mui/material'
import axios from 'axios'

export const PropertiesList = () => {
  const [properties, setProperties] = useState([])

  const getPropertiesData = async () => {
    const propertiesFromApi = await axios.get('./../data/db.json')
    setProperties(propertiesFromApi.data.properties)
  }
  console.log(properties)
  useEffect(() => {
    getPropertiesData()
  }, [])
  return <List>{properties && properties.map((el) => <ListItem>{el.name}</ListItem>)}</List>
}
