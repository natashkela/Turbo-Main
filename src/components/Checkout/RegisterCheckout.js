import React from 'react';
import PropTypes from 'prop-types';
const RegisterCheckout = ({isLoggedIn,registerCheckout,index,activePanel}) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="checkout-method-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" onClick={()=>activePanel(index)} data-parent="#checkout-accordion" href="#checkout-method" aria-expanded="true" aria-controls="checkout-method">
            Registration
          </a>
        </h4>
      </div>
      <div id="checkout-method" className={registerCheckout ? "panel-collapse collapse in" : "panel-collapse collapse"} role="tabpanel" aria-labelledby="checkout-method-heading">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <input type="text" name="first-name" className="rq-form-control reverse" placeholder="First Name" required />
            </div>
            <div className="col-md-6">
              <input type="text" name="last-name" className="rq-form-control reverse" placeholder="Last Name" required />
            </div>
            <div className="col-md-6">
              <input type="password" name="password" className="rq-form-control reverse" placeholder="Password" required />
            </div>
            <div className="col-md-6">
              <input type="password" name="re-password" className="rq-form-control reverse" placeholder="Repeat Password" required />
            </div>
            <div className="col-md-6">
              <input type="text" name="username" className="rq-form-control reverse" placeholder="Username" required />
            </div>
            <div className="col-md-6">
              <input type="text" name="phone" className="rq-form-control reverse" placeholder="Phone" required />
            </div>
            <div className="col-md-6">
              <input type="email" name="email" className="rq-form-control reverse" placeholder="Email Address" required />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
RegisterCheckout.propTypes = {
  isLoggedIn: PropTypes.bool,
  registerCheckout: PropTypes.bool,
  index: PropTypes.number,
  activePanel:PropTypes.func
}
export default RegisterCheckout;
