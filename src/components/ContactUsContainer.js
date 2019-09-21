import React from 'react';
import Map from './Map.js';
const ContactUsContainer = () => {
  return (
    <div>
      <div className="rq-contact-us-grid-block">
        <div className="row">
          <div className="col-md-4">
            <div className="grid-block-single">
              <i className="icon_mobile"></i>
              <h3>Phone</h3>
              <p>Phone 01: (8801) 738 5678 64</p>
              <p>Phone 02: (8801) 722 0008 99</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="grid-block-single">
              <i className="icon_pin_alt"></i>
              <h3>Address</h3>
              <p>5th Floor, AH Building 1234 New Design </p>
              <p>St. Melbourne, Australia</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="grid-block-single">
              <i className="icon_mail_alt"></i>
              <h3>Email</h3>
              <p>info@yourdomain.com</p>
              <p>support@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rq-contact-us-form-content">
        <h3>If you got any questions <br/>please do not hesitate to send us a message</h3>
        <form action="#">
          <input type="text" className="contact-form-input" placeholder="Your name" />
          <input type="email" className="contact-form-input" placeholder="Your email" />
          <input type="text" className="contact-form-input" placeholder="Subject" />
          <textarea className="contact-form-input" placeholder="Message"></textarea>
          <div className="submit-btn">
            <button type="submit" className="rq-btn rq-btn-primary">Send Message</button>
          </div>
        </form>
      </div>
      <div className="rq-contact-us-map">
        <div id="map">
          <Map />
        </div>
      </div>
    </div>
  );
}
export default ContactUsContainer;
