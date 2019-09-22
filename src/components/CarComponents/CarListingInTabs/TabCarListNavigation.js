import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
const TabCarListNavigation = ({list,tabToggle}) => {
  return (
      <ul className="nav nav-tabs parent-tab" role="tablist">
        {list.map((tab,index)=>
          <li role="presentation" key={index} className={tab.isActive ? 'active' : ''} onClick={()=>tabToggle(index)}>
            <NavLink to={"#car-tab"+(index)} role="tab" data-toggle="tab">{tab.name}</NavLink>
          </li>
        )}
      </ul>
    );
}
TabCarListNavigation.propTypes = {
  list: PropTypes.array,
  tabToggle: PropTypes.func
}
export default TabCarListNavigation;
