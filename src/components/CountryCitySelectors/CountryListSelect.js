import React from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const CountryListSelect = ({selected, selectCountry}) => {
  return (
      <CountryDropdown className="rq-form-control region-select-profile" valueType="short" value={selected} onChange={(val)=>selectCountry(val)} />
  );
}
export default CountryListSelect;
