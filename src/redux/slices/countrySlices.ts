import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findCountriesByName } from "../../helpers/helpers";
import { CounterState } from "./types";

const countries = JSON.parse(localStorage.getItem("countries") as string);

const initialState = {
  countryNames: countries || [],
  selectedCountries: findCountriesByName(countries),
} as CounterState;

export const countrySlices = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<string[]>) {
      const countries = findCountriesByName(action.payload);
      localStorage.setItem("countries", JSON.stringify(action.payload));
      state.selectedCountries = countries;
      state.countryNames = action.payload;
    },
  },
});

export const { setCountries } = countrySlices.actions;
export default countrySlices.reducer;
