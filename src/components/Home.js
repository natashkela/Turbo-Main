import React, { Component } from 'react';
import IndexHeader from './IndexHeader.js';
import IndexIntroduction from './IndexIntroduction.js';
import CarListingTabContainer from './CarListingTabContainer.js';
import PartnerImageContainer from './PartnerImageContainer.js';
import TestimonialsContainer from './TestimonialsContainer.js';
import RecentTipsContainer from './RecentTipsContainer.js';
import CallSupportContainer from './CallSupportContainer.js';
import Footer from './Footer.js';
class App extends Component {
  render() {
    return (
      <div>
        <div id="main-wrapper">
          <IndexHeader />
          <div className="rq-page-content">
            <IndexIntroduction />
            <CarListingTabContainer />
            <div className="rq-content-block gray-bg">
              <div className="container">
                <PartnerImageContainer />
                <TestimonialsContainer />
                <RecentTipsContainer />
              </div>
            </div>
            <CallSupportContainer />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
