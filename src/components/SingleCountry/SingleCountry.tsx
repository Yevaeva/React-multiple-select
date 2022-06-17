import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ICountry } from "../../redux/slices/types";
import { RootState } from "../../redux/store";
import "./SingleCountry.scss";

const SingleCountry = () => {
  const location = useLocation();
  const { selectedCountries } = useSelector(
    (state: RootState) => state.country
  );
  const [country, setCountry] = useState(null as null | ICountry);

  useEffect(() => {
    const countryCode = location.pathname.split("/")[2];
    setCountry(
      selectedCountries.find(
        (obj) => obj.countryCode === countryCode
      ) as ICountry
    );
  }, [location.pathname, selectedCountries]);

  return (
    <div className="single-country" data-testid="singlePage">
      <div className="single-country-wrapper">
        <h2>{country?.countryName}</h2>
        <p>
          <b>Capital:</b> {country?.capital}
        </p>
        <p>
          <b>Country code: </b>
          {country?.countryCode}
        </p>
        <p>
          <b>Currency:</b> {country?.currencyCode}
        </p>
        <p>
          <b>Population: </b>
          {country?.population}
        </p>
        <p>
          <b>Continent Name:</b> {country?.continentName}
        </p>
      </div>
    </div>
  );
};

export default memo(SingleCountry);
