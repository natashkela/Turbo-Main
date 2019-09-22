import React from 'react';
import PropTypes from 'prop-types';
const BreadcrumbTernary = ({title, description,breadcrumbs}) =>{
  let descriptionArray = description.split(".");
  return (
    <div className="container">
      <div className="margin-top-15">
        <ol className="breadcrumb rq-subtitle">
          {breadcrumbs.map((breadcrumb,index)=>
            breadcrumb.href ? <li key={index}><a href={breadcrumb.href}>{breadcrumb.title}</a></li> : <li key={index} className="active">{breadcrumb.title}</li>
          )}
        </ol>
      </div>
      <h1 className="rq-title margin-top-15 text-center">{title}<span className="rq-dot">.</span><i className="rq-line"></i></h1>
      <div className="container margin-top-30">
        <div className="text-center">
          {descriptionArray.map((sentence,index)=>
            <span key={index}>{sentence}<br /></span>
          )}
        </div>
      </div>
    </div>
  );
}
BreadcrumbTernary.propTypes={
  title:PropTypes.string,
  description:PropTypes.string
}
export default BreadcrumbTernary;
