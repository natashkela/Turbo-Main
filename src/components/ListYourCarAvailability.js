import React from 'react';
const ListYourCarAvailability = () => {
  return (
    <div className="list-your-car-availability margin-bottom-40">
      <h5 className="margin-top-10 margin-bottom-0"><strong>Car Availability</strong></h5>
      <div className="row margin-top-10">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent">
          <span className="more-info">How much advance notice do you need to confirm a trip? </span>
          <select className="margin-top-40 rq-form-control reverse">
            <option>Advance Notice</option>
          </select>
        </div>
        <div className="information-box col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <span className="more-info">Advance Notice</span>
          <p>Blocks trips that don't give you enough advance notice</p>
        </div>
      </div>
      <div className="row margin-top-30 ">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent">
        <span className="more-info">How long would you like trips to last? </span>
          <select className="margin-top-40 rq-form-control reverse">
            <option>Minimum Duration</option>
          </select>
        </div>
        <div className="information-box margin-top-60 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <span className="more-info">Shortest Possible Trip</span>
          <p>Shortest possible amount of time travelers should request your car</p>
        </div>
      </div>
      <div className="row margin-top-15 ">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent">
          <select className="rq-form-control reverse">
            <option>Maximum Duration</option>
          </select>
        </div>
        <div className="information-box col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <span className="more-info">Longest Possible Trip</span>
          <p>Longest possible amount of time travelers should request your car</p>
        </div>
      </div>
    </div>
  );
}
export default ListYourCarAvailability;
