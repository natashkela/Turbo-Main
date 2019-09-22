import React from 'react';
import AboutUs from './AboutUs.js';
import ContactUs from '../Contact/ContactUs.js';
import Team from './Team/Team.js';
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
