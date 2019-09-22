import React from 'react';
import PropTypes from 'prop-types';
const PaymentInformation = ({paymentInformation, index,activePanel}) =>{
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" onClick={()=>activePanel(index)} id="payment-information-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#payment-information" aria-expanded="true" aria-controls="payment-information">
            Payment Information
          </a>
        </h4>
      </div>
      <div id="payment-information" className={paymentInformation ? "panel-collapse collapse in" : "panel-collapse collapse"} role="tabpanel" aria-labelledby="payment-information-heading">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <input type="text" name="billing-first-name" className="rq-form-control reverse" placeholder="First Name" required />
            </div>
            <div className="col-md-6">
              <input type="text" name="billing-last-name" className="rq-form-control reverse" placeholder="Last Name" required />
            </div>
            <div className="col-md-12">
              <input type="text" name="credit-card" className="rq-form-control reverse" placeholder="Credit Card Number" required />
            </div>
            <div className="col-md-6">
              <input type="text" name="month-year" className="rq-form-control reverse" placeholder="MM/YY" required />
            </div>
            <div className="col-md-6">
              <input type="text" name="cvv" className="rq-form-control reverse" placeholder="CVV" required />
            </div>
            <div className="col-md-12">
              <button type="button" className="rq-btn rq-btn-primary btn-large border-radius">Confirm Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
PaymentInformation.propTypes = {
  paymentInformation:PropTypes.bool,
  index: PropTypes.number,
  activePanel: PropTypes.func
}
export default PaymentInformation;
