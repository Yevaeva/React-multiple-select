import React, { memo, useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowDown from "../../assets/icons/ArrowDown";
import ArrowUp from "../../assets/icons/ArrowUp";
import data from "../../data/Countries.json";
import { useOutsideClick } from "../../helpers/OutsideClickHook";
import { setCountries } from "../../redux/slices/countrySlices";
import { RootState } from "../../redux/store";
import CheckedOptions from "../CheckedOptions/CheckedOptions";
import SelectOptions from "../SelectOptions/SelectOptions";
import "./MultiSelect.scss";

const MultiSelect = () => {
  const list = data.countries.country;
  const { countryNames } = useSelector((state: RootState) => state.country);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(list);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const selectRef = useOutsideClick(() => setIsOpen(false));

  const onFocus = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };

  const toggleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const { value } = e.currentTarget.dataset;
      const index = countryNames.indexOf(value as string);
      const newValues = [...countryNames];
      if (index === -1) {
        newValues.push(value as string);
      } else {
        newValues.splice(index, 1);
      }
      dispatch(setCountries(newValues));
    },
    [countryNames, dispatch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsOpen(true);
    setOptions(
      list.filter((value) =>
        value.countryName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="multiselect-wrapper">
      <div className="select" onFocus={onFocus} ref={selectRef}>
        <div className="selection" onClick={handleClick} data-testid="select">
          <div className="selection-items">
            <CheckedOptions handleRemove={toggleClick} />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              ref={ref}
              placeholder="Pick some countries"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
              onChange={handleChange}
              data-testid="inputText"
            />
            <span
              className="arrow"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(e);
              }}
            >
              {isOpen ? <ArrowUp /> : <ArrowDown />}
            </span>
          </div>
        </div>
        {isOpen && (
          <SelectOptions options={options} handleClick={toggleClick} />
        )}
      </div>
    </div>
  );
};

export default memo(MultiSelect);
