import React from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const CountryListSelect = ({selected, selectCountry}) => {
  return (
    <CountryDropdown className="rq-form-control reverse" valueType="short" value={selected} onChange={(val)=>selectCountry(val)} />
  );
}
export default CountryListSelect;
