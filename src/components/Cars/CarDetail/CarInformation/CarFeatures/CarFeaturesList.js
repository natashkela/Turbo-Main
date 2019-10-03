import React from 'react';
import PropTypes from 'prop-types';
const CarFeaturesList =({features,id, index,isActive})=>{
  return(
    <div role="tabpanel" className={isActive ? "tab-pane active":"tab-pane"} id={id}>
      <ul className="rq-listing-lists">
        {features.map((features,index)=>
          <li key={index} className={features.value ? "checked" : "unchecked"}>{features.name}</li>
        )}
      </ul>
    </div>
  );
}
CarFeaturesList.propTypes={
  features:PropTypes.array,
  id:PropTypes.string,
  index:PropTypes.number,
  isActive:PropTypes.bool
}
export default CarFeaturesList;
