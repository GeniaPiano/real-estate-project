import axios from 'axios'

export const propertiesService = {
  fetchAll: async () => {
    const propertiesFromApi = await axios.get('./../data/db.json')
    return propertiesFromApi.data.properties
  },
  fetchById: async (id) => {
    const allProperties = await propertiesService.fetchAll()
    if (allProperties.length > 0)
    return allProperties.find(property => Number(property.id) === Number(id))
  }
}