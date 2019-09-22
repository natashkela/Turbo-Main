import React from 'react';
import PropTypes from 'prop-types';
import ReactPhoneInput from 'react-phone-input-2';
const ListYourCarMobileNumber = ({isLoggedIn, customerInformation}) =>{
  return (
    <div className="list-your-mobile-number margin-bottom-40">
      <h5 className="margin-top-10 margin-bottom-0"><strong>Mobile Number</strong></h5>
      <div className="row">
        <div className="margin-top-15 col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <ReactPhoneInput inputClass="phone-number-input" defaultCountry={isLoggedIn ? customerInformation.phoneCountry : 'ge'} value={isLoggedIn ? customerInformation.phone : ""} />
        </div>
      </div>
    </div>
  );
}
ListYourCarMobileNumber.propTypes = {
  isLoggedIn: PropTypes.bool,
  customerInformation: PropTypes.object
}
export default ListYourCarMobileNumber;
