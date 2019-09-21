import React from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const CityListSelect = ({countrySelected, citySelected, selectRegion}) => {
  return (
    <RegionDropdown className="rq-form-control reverse" countryValueType="short" country={countrySelected} value={citySelected} onChange={(val)=>selectRegion(val)} />
  );
}
export default CityListSelect;
