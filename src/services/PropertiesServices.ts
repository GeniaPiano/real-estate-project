import axios from 'axios';
import {Property} from "../types/Property.ts";

export const propertiesService = {
    fetchAll: async () => {
        try {
            const response = await axios.get('/db.json');
            return response.data.properties as Property[];
        } catch (error) {
            console.error("Error fetching properties: ", error);
            return [];
        }
    },

    fetchById: async (id: string) => {
        try {
            const allProperties : Property[] = await propertiesService.fetchAll();
            const property : Property | undefined = allProperties.find(property => Number(property.id) === Number(id));
            return property || null;
        } catch (error) {
            console.error("Error fetching property by ID: ", error);
            return null;
        }
    }
};