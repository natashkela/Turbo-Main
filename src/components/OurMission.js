import React from 'react';
import transparentImg from '../img/block-transparent-img.png';
const OurMission = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="mission-content">
          <h1 className="rq-title">Our Mission<span className="rq-dot">.</span><i className="rq-line"></i></h1>
          <p className="mission-text">Suspendisse hendrerit facilisis ante. Sed feugiat lectus
          non tim porttitor aliquam. Ut a ipsum tempus, venenatis nibh et, eleifefend nisi.
          Etiam hendrerit, purus ac varius vestibulum, enim lon arcu euismod purus,
          id hendrerit tellus turpis biben dum exilon Morbi cursus justo ut malesuada tempus.
          </p>
          <address>
            <a href="#">Brasion Mike</a>
            <cite>- CEO Founder</cite>
          </address>
        </div>
      </div>
      <div className="col-md-6">
        <div className="mission-image">
          <img src={transparentImg} alt="" />
        </div>
      </div>
    </div>
  );
}
export default OurMission;
