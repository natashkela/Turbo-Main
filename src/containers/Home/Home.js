import React, { Component } from 'react';
import IndexHeader from '../../components/Home/IndexHeader/IndexHeader';
import IndexIntroduction from '../../components/Home/IndexIntroduction/IndexIntroduction.js';
import CarListingTabs from '../Cars/CarListingTabs/CarListingTabs.js';
import PartnerImageContainer from '../../components/Home/PartnerImageContainer.js';
import TestimonialsContainer from '../Testimonials/TestimonialsContainer.js';
import RecentTipsContainer from '../../components/RecentTips/RecentTipsContainer.js';
import CallSupportContainer from '../../components/Home/CallSupportContainer.js';
import Footer from '../../components/Footer/Footer.js';
class App extends Component {
  render() {
    return (
      <div>
        <div id="main-wrapper">
          <IndexHeader />
          <div className="rq-page-content">
            <IndexIntroduction />
            <CarListingTabs />
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
