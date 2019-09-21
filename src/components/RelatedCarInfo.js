import React from 'react';
import PropTypes from 'prop-types';
import RelatedCars from './RelatedCars.js';
import Faqs from './Faqs.js';
const RelatedCarInfo = ({relatedCars, faqs, toggleFaq}) => {
  return (
    <div className="rq-content-block">
      <div className="related-car-faq">
        <div className="container">
          <div className="row">
            <RelatedCars relatedCars={relatedCars}/>
            <Faqs faqs={faqs} toggleFaq={toggleFaq}/>
          </div>
        </div>
      </div>
    </div>
  );
}
RelatedCarInfo.propTypes = {
  relatedCars:PropTypes.array,
  toggleFaq:PropTypes.func
}
export default RelatedCarInfo;
