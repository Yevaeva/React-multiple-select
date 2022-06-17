export interface ICountry {
  countryCode: string;
  countryName: string;
  currencyCode: string;
  population: string;
  capital: string;
  continentName: string;
}

export interface CounterState {
  countryNames: Array<string>;
  selectedCountries: Array<ICountry>;
}
