import React from 'react';
import AboutUs from './AboutUs.js';
import ContactUs from './ContactUs.js';
import Team from './Team.js';
const AboutUsContentContainer = () => {
  return (
    <div className="rq-content-block">
      <div className="rq-about-us-content-wrapper">
        <div className="container">
          <AboutUs />
          <ContactUs />
          <Team />
        </div>
      </div>
    </div>
  );
}
export default AboutUsContentContainer;
