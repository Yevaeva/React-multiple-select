import data from "../data/Countries.json";
import { ICountry } from "../redux/slices/types";

export const findCountriesByName = (
  countryArray: Array<string> | null
): Array<ICountry> => {
  const list = data.countries.country;
  return list.filter((obj) => countryArray?.includes(obj.countryName)) || [];
};

