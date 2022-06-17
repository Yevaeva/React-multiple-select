import React, { memo } from "react";
import { useSelector } from "react-redux";
import CloseIcon from "../../assets/icons/CloseIcon";
import { RootState } from "../../redux/store";

interface ICheckedOptions {
  handleRemove: (e: React.MouseEvent<HTMLElement>) => void;
}

const CheckedOptions = ({ handleRemove }: ICheckedOptions) => {
  const { countryNames } = useSelector((state: RootState) => state.country);

  return (
    <div>
      {countryNames.map((value) => {
        return (
          <span
            key={value}
            onClick={(e) => e.stopPropagation()}
            className="multiple value"
          >
            {value}
            <span data-value={value} onClick={handleRemove} className="delete">
              <CloseIcon />
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default memo(CheckedOptions);
