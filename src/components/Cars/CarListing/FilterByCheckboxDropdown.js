import React from 'react';
import PropTypes from 'prop-types';
const FilterByCheckboxDropdown = ({title,list})=> {
  return (
    <div className="filter-single">
      <div className="btn-group">
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {title} <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          {list.map((checkbox,index)=>
            <li key={index}>
              <span className="rq-checkbox">
                <label>
                  <input type="checkbox" /> {checkbox}
                </label>
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
FilterByCheckboxDropdown.propTypes = {
  title:PropTypes.string,
  list:PropTypes.array
}
export default FilterByCheckboxDropdown;
