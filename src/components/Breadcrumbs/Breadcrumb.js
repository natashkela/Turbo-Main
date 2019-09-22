import React from 'react';
const Breadcrumb = ({title,breadcrumbs}) => {
  return(
    <div className="inner-page-banner">
      <div className="rq-overlay"></div>
      <div className="container">
        <div className="rq-title-container bredcrumb-title">
          <h2 className="rq-title">{title}</h2>
          <ol className="breadcrumb rq-subtitle">
            {breadcrumbs.map((breadcrumb,index)=>
              breadcrumb.href ? <li key={index}><a href={breadcrumb.href}>{breadcrumb.title}</a></li> : <li key={index} className="active">{breadcrumb.title}</li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Breadcrumb;
