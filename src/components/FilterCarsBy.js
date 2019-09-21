import React from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import FilterByCheckboxDropdown from './FilterByCheckboxDropdown';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const FilterCarsBy = ({viewType,viewTypeChange}) => {
  let list = [
    {
      title:"Brand",
      list:[
        "Toyota",
        "Ford",
        "Porche"
      ]
    },
    {
      title:"className",
      list:[
        "A Class",
        "B Class",
        "C Class"
      ]
    },
    {
      title:"Field",
      list:[
        "50 Liter",
        "100 Liter",
        "150 Liter"
      ]
    }

  ];
  return (
    <div className="rq-listing-top-bar-filter-option">
      <div className="filter-list">
        <h5>Filter by</h5>
        {list.map((filter,index)=>
          <FilterByCheckboxDropdown key={index} title={filter.title} list={filter.list} />
        )}
        <div className="filter-single">
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Price <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="rq-pricing-slider">
                  <Range trackStyle={{backgroundColor:"#efa80f"}} handleStyle={{backgroundColor: "#efa80f"}} min={0} max={20} defaultValue={[3,20]} tipFormatter={value => `${value}`}/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rq-grid-list-view-option">
        <a className={viewType==1 ? "active" :"" } onClick={()=>viewTypeChange()} href="#"><i className="ion-grid"></i></a>
        <a className={viewType==0 ? "active" :"" } onClick={()=>viewTypeChange()} href="#"><i className="ion-navicon"></i></a>
      </div>
    </div>
  );
}
FilterCarsBy.propTypes={
  viewType:PropTypes.number,
  viewTypeChange:PropTypes.func
}
export default FilterCarsBy;
