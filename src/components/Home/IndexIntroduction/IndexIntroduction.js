import React from 'react';
import OurMission from './OurMission.js';
const IndexIntroduction = () => {
  return(
    <div className="rq-content-block gray-bg">
      <span className="bg-large-text">Turbo</span>
      <div className="container">
        <div className="row">
          <div className="col-md-11">
            <div className="rq-mission-block">
              <OurMission />
            </div>
          </div>
        </div>
        <div className="rq-browse-section">
          <h1 className="rq-title">Top Our Cars<span className="rq-dot">.</span></h1>
          <a href="#">Browse All Car <i className="ion-ios-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
}
export default IndexIntroduction;
