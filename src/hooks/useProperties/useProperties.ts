import {useEffect, useState} from 'react'
import {propertiesService} from '../../services/PropertiesServices'
import {Property} from "../../types/Property.ts";

export const useProperties = () => {
    const [properties, setProperties] = useState<Property[] | []>([])

    useEffect(() => {
        (async () : Promise<void> => {
            const propertiesFromApi = await propertiesService.fetchAll()
            setProperties(propertiesFromApi)
        })()
    }, [])

    return properties
}