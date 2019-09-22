import React from 'react';
import PropTypes from 'prop-types';
const BlogCategories = ({list,activateCategory}) =>{
  return (
    <ul className="nav nav-tabs" role="tablist">
      {list.map((category,index)=>
        <li key={index} className={category.isActive ? "active" : "" } onClick={()=>activateCategory(index)} role="presentation"><a href={"#"+category.uniqueName}  role="tab" data-toggle="tab">{category.title}</a></li>
      )}
    </ul>
  );
}
BlogCategories.propTypes = {
  list:PropTypes.array,
  activateCategory:PropTypes.func
}
export default BlogCategories;
