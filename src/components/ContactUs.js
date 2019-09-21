import React from 'react';
const ContactUs = () => {
  let address = "1234 New Design St. Melbourne, Australia";
  let email = "hello@turbotheme.com";
  let phone = "+880 1738 567864";

  return (
    <div className="about-us-content-single">
      <div className="row">
        <div className="col-md-4">
          <h2 className="brand-title">Contact Us<span className="dot">.</span></h2>
        </div>
        <div className="col-md-8">
          <div className="contact-single">
            <i className="icon_pin"></i>
            <p>{address}</p>
          </div>
          <div className="contact-single">
            <i className="icon_mail_alt"></i>
            <p>{email}</p>
          </div>
          <div className="contact-single">
            <i className="icon_phone"></i>
            <p>{phone}</p>
          </div>
          <div className="opening-hour">
            <p> HOUR WORK:  <span> MONDAY - FRIDAY  /  08AM - 05PM</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
