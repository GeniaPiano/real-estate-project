import { create } from 'zustand'
import { propertiesService } from '../services/PropertiesServices'

export const usePropertiesStore = create((set) => ({
  properties: [],
  currentProperty: null,
  isLoading: false,
  error: null,
  filters: {
    cities: [],
    types: '',
    priceRange: [0, Infinity],
  },
  filteredProperties: [],
  fetchProperties: async () => {
    set({isLoading: true, error: null})
    try {
      const properties = await propertiesService.fetchAll()
      // setTimeout to simulate fetching from API
      setTimeout(()=> {
        set({properties, filteredProperties: properties, isLoading: false})
      }, 800)
  } catch (error) {
    return set({isLoading: false, error: error.message})
  }
 },
 fetchPropertyById: async (id) => {
  set({ isLoading: true, error: null})
  try {
    const property = await propertiesService.fetchById(id)
    setTimeout(()=> {
      // setTimeout to simulate fetching from API  
      set({currentProperty: property, isLoading: false})
    }, 800)
  } catch (error) {
    set({ isLoading: false, error: error.message })
  }
 },
 resetFilters: () => {
  set((state) => ({
    filters: {
      cities: [],
      types: [],
      priceRange: [0, Infinity]
    },
    filteredProperties: state.properties
  }))
 },
 setFilter: (filter) => {
  set((state) => {
    const newFilters = { ...state.filters, ...filter }
    const filteredProperties = state.properties.filter((property) => {
      return (
        (newFilters.cities.length === 0 || newFilters.cities.includes(property.city)) &&
        (newFilters.types.length=== 0 || newFilters.types.includes(property.type)) &&
        property.price >= newFilters.priceRange[0] &&
        property.price <= newFilters.priceRange[1]
      )
    })
    return { ...state, filters: newFilters, filteredProperties }
  });
},
}))