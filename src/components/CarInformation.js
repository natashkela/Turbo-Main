import React from 'react';
import PropTypes from 'prop-types';
import CarFeatures from './CarFeatures.js';
import CarLocation from './CarLocation.js';
import MainCarFeatures from './MainCarFeatures.js';
import BreadcrumbSecondary from './BreadcrumbSecondary';
const CarInformation = ({breadcrumbs,title,car,reviews,submitReview}) => {
  return (
    <div>
      <div className="rq-listing-single">
        <div className="rq-listing-gallery-post">
          <div className="rq-gallery-content">
            <div className="details-slider owl-carousel">
              <div className="item">
                <img src="img/listing-detail2.png" alt="" />
              </div>
              <div className="item">
                <img src="img/listing-detail.png" alt="" />
              </div>
              <div className="item">
                <img src="img/listing-detail2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rq-content-block">
        <div className="container">
          <BreadcrumbSecondary title={title} breadcrumbs={breadcrumbs}/>
          <MainCarFeatures mileage={car.mileage}
                            transmission={car.transmission}
                            seats={car.seats}
                            luggage={car.luggage}
                            fuel={car.fuel} />
          <CarFeatures car={car} reviews={reviews} submitReview={submitReview}/>
          <CarLocation car={car} />
        </div>
      </div>
    </div>
  );
}
CarInformation.propTypes={
  breadcrumbs:PropTypes.array,
  title:PropTypes.string,
  car:PropTypes.object,
  reviews:PropTypes.array,
  submitReview:PropTypes.func
}
export default CarInformation;
