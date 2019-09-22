import React from 'react';
import PropTypes from 'prop-types';
const Faqs = ({faqs,toggleFaq})=> {
  return (
    <div className="col-md-6">
      <h3 className="section-title">FAQs</h3>
      <div className="rq-faqs">
        {faqs.map((faq,index)=>
          <div key={index} className="faq-single">
            <a href="#" className="faq-title" onClick={(event)=>toggleFaq(event, index)}>{faq.question}</a>
            <p className={faq.isActive ? "hidden-content" : "hidden-content hidden"}>
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
Faqs.propTypes = {
  faqs:PropTypes.array,
  toggleFaq:PropTypes.func
}
export default Faqs;
