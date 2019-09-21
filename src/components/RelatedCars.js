import React from 'react';
import PropTypes from 'prop-types';
const RelatedCars = ({relatedCars}) => {
  return (
    <div className="col-md-6">
      <h3 className="section-title">Related Cars</h3>
      <div className="child-tab-wrapper related-cars">
        <ul className="nav nav-tabs" role="tablist">
        {relatedCars.map((car,index)=>
          <li key={index}>
            <a>
              <img src={require("../img/listing-details-tab/tab-image"+car.id+".png")} alt="" />
              <span className="tittle">{car.title}</span>
              <span className="car-des">{car.description}</span>
              <span className="rent-price">${car.price}<b>/Day</b></span>
            </a>
          </li>
        )}
        </ul>
      </div>
    </div>
  );
}
RelatedCars.propTypes = {
  relatedCars:PropTypes.array
}
export default RelatedCars;
