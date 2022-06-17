import { memo } from "react";
import { useSelector } from "react-redux";
import CheckedIcon from "../../assets/icons/CheckedIcon";
import { ICountry } from "../../redux/slices/types";
import { RootState } from "../../redux/store";
import "./SelectOptions.scss";

interface ISelectOptions {
  options: Array<ICountry>;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}
const SelectOptions = ({ options, handleClick }: ISelectOptions) => {
  const { countryNames } = useSelector((state: RootState) => state.country);

  return (
    <div className="options" data-testid="options">
      {options.map((option, index) => (
        <div
          key={option.countryName}
          data-value={option.countryName}
          data-testid="option"
          className={
            countryNames.includes(option.countryName)
              ? "option selected"
              : "option"
          }
          onClick={handleClick}
        >
          <span className="checkbox">
            {countryNames.includes(option.countryName) ? <CheckedIcon /> : null}
          </span>
          {option.countryName}
        </div>
      ))}
    </div>
  );
};

export default memo(SelectOptions);
