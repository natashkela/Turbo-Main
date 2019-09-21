import React from 'react';
import PropTypes from 'prop-types';
import RegisterCheckout from './RegisterCheckout';
const ListYourCarProfilePhoto = ({isLoggedIn,customerInformation}) =>{
  return (
    <div className="list-your-mobile-number margin-bottom-40">
      <h5 className="margin-top-10 margin-bottom-0"><strong>Personal Information</strong></h5>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <div>
            <img src={customerInformation.id && customerInformation.username ? require("../img/users/"+customerInformation.id+"-"+customerInformation.username+".jpg") : require("../img/users/avatar.jpg")} style={{width:"100px",height:"100px", borderRadius:"50%"}} className=" margin-top-15 img-responsive" />
            <button className="margin-left-60 rq-btn rq-btn-secondary">Upload Photo </button>
            <p className="margin-top-10">Adding a photo helps hosts recognize each other when picking the car up</p>
          </div>
        </div>
        {isLoggedIn &&
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" disabled className="rq-form-control" value={customerInformation.firstName} placeholder="First Name" />
          </div>
        }
        {isLoggedIn &&
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" disabled className="rq-form-control" value={customerInformation.lastName} placeholder="Last Name" />
          </div>
        }
      </div>
      {!isLoggedIn &&
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
      }
    </div>
  );
}
ListYourCarProfilePhoto.propTypes = {
  isLoggedIn: PropTypes.bool,
  customerInformation: PropTypes.object
}
export default ListYourCarProfilePhoto;
