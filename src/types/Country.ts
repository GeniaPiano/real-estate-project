export interface Country {
    countryName: string;
    map: string;
    flag: string;
}

export interface CountryFromApi {
    name: { common: string };
    maps: { googleMaps: string };
    flags: { svg: string };
}