import React from 'react';
import PropTypes from 'prop-types';
const BreadcrumbSecondary = ({breadcrumbs,title})=>{
  return(
    <div className="rq-title-container bredcrumb-title text-center">
      <h1 className="rq-title light">{title}</h1>
      <ol className="breadcrumb rq-subtitle">
        {breadcrumbs.map((breadcrumb,index)=>
          breadcrumb.href ? <li key={index}><a href={breadcrumb.href}>{breadcrumb.title}</a></li> : <li key={index} className="active">{breadcrumb.title}</li>
        )}
      </ol>
    </div>
  );
}
BreadcrumbSecondary.propTypes = {
  breadcrumbs: PropTypes.array,
  title:PropTypes.string
}
export default BreadcrumbSecondary;
