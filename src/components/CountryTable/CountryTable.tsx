import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICountry } from "../../redux/slices/types";
import { RootState } from "../../redux/store";
import "./CountryTable.scss";

const CountryTable = () => {
  const { selectedCountries } = useSelector(
    (state: RootState) => state.country
  );
  const navigate = useNavigate();

  return (
    <div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="text-center">Country name</th>
              <th className="text-center">Capital</th>
              <th className="text-center">Continent</th>
            </tr>
          </thead>
          <tbody>
            {selectedCountries?.map((country: ICountry) => {
              return (
                <tr
                  key={country.countryName}
                  onClick={() => navigate(`/country/${country.countryCode}`)}
                  data-testid="singleLink"
                >
                  <td data-label="Country name">{country.countryName}</td>
                  <td data-label="Capital">{country.capital}</td>
                  <td data-label="Continent">{country.continentName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(CountryTable);
