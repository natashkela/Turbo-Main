import React from 'react';
import PropTypes from 'prop-types';
const CarDescription = ({description,id,index,isActive})=>{
  return (
    <div role="tabpanel" className={isActive ? "tab-pane active":"tab-pane"} id={id}>
      {description}
    </div>
  );
}
CarDescription.propTypes = {
  description:PropTypes.string,
  id:PropTypes.string,
  index:PropTypes.number,
  isActive:PropTypes.bool
}
export default CarDescription;
