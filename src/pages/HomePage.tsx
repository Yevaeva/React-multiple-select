import { useSelector } from "react-redux";
import CountryTable from "../components/CountryTable/CountryTable";
import MultiSelect from "../components/MultiSelect/MultiSelect";
import { RootState } from "../redux/store";

const HomePage = () => {
  const { selectedCountries } = useSelector(
    (state: RootState) => state.country
  );
  return (
    <>
      <header data-testid="homePage">
        <h1 data-testid="header">Select some countries</h1>
      </header>
      <MultiSelect />
      {!!selectedCountries.length && <CountryTable />}
    </>
  );
};

export default HomePage;
