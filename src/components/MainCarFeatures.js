import React from 'react';
import PropTypes from 'prop-types';
const MainCarFeatures =({mileage,transmission,fuel,seats,luggage})=>{
  return(
    <div className="rq-listing-promo-wrapper">
      <div className="row">
        <div className="col-md-12">
          <div className="rq-listing-promo-content">
            <div className="rq-listing-item">
              <img src={require("../img/listing-icon1.png")} alt="" />
              <h6 className="rq-listing-item-title">Mileage</h6>
              <h4 className="rq-listing-item-number">{mileage}</h4>
            </div>
            <div className="rq-listing-item">
              <img src={require("../img/listing-icon2.png")} alt="" />
              <h6 className="rq-listing-item-title">Transmission</h6>
              <h4 className="rq-listing-item-number">{transmission ? "Automatic" : "Manual"}</h4>
            </div>
            <div className="rq-listing-item">
              <img src={require("../img/listing-icon3.png")} alt="" />
              <h6 className="rq-listing-item-title">Seats</h6>
              <h4 className="rq-listing-item-number">{seats} Adults</h4>
            </div>
            <div className="rq-listing-item">
              <img src={require("../img/listing-icon4.png")} alt="" />
              <h6 className="rq-listing-item-title">Luggage</h6>
              <h4 className="rq-listing-item-number">{luggage} Bags</h4>
            </div>
            <div className="rq-listing-item">
              <img src={require("../img/listing-icon5.png")} alt="" />
              <h6 className="rq-listing-item-title">Fuel</h6>
              <h4 className="rq-listing-item-number">{fuel}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
MainCarFeatures.propTypes = {
  mileage:PropTypes.number,
  transmission:PropTypes.number,
  fuel:PropTypes.string,
  seats:PropTypes.number,
  luggage:PropTypes.number
}
export default MainCarFeatures;
