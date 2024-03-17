import {Select, MenuItem, FormControl, Box, SelectChangeEvent} from "@mui/material";
import { useCountries } from "../../../hooks/useCountries/useCountries";
import { useState } from "react";
import {CountryName} from "./types.ts";

export const CountriesDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryName>("");
  const {countries, loading, error} = useCountries();
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <Select
          sx={{
            backgroundColor: "#fff",
            width: "300px",
          }}
          size="small"
          className="changeInput"
          labelId="country-label"
          value={selectedCountry}
          onChange={handleChange}
          defaultValue="select country"
        >
          {!loading && !error && countries &&
            countries.map((el, index) => (
              <MenuItem
                sx={{
                  backgroundColor: "#fff",
                  width: "300px",
                }}
                value={el.countryName}
                key={index}
              >
                {el.countryName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};
