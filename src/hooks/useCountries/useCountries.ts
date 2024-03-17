import { useState, useEffect } from 'react';
import { countriesService } from '../../services/CountriesServices';
import {Country} from "../../types/Country.ts";
import {ErrorWithMessage} from "./types.ts";

export const useCountries = () => {
    const [countries, setCountries] = useState<Country[] | []>([]);
    const [loading, setLoading] = useState<boolean> (false);
    const [error, setError] = useState<ErrorWithMessage | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            try {
                const countriesFromApi = await countriesService.fetchAll() as Country[];
                setCountries(countriesFromApi);
            } catch (err) {
                if (typeof err === "object" && err !== null && "message" in err) {
                    setError(err as ErrorWithMessage) } else {
                    setError({ message: 'An unknown error occurred' });
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    return { countries, loading, error };
};
// import { useState, useEffect } from 'react'
// import { countriesService } from '../../services/CountriesServices'
//
// export const useCountries = () => {
//     const [countries, setCountries] = useState([])
//
//     useEffect(() => {
//         const fetchCountries = async () => {
//             const countriesFromApi = await countriesService.fetchAll()
//             setCountries(countriesFromApi)
//         }
//         fetchCountries()
//     }, [])
//
//     return countries
// }