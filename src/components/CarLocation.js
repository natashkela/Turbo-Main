import React from 'react';
import Map from './Map.js';
const CarLocation = ()=>{
  return (
    <div className="location-map">
      <div className="listing-page-title">
        <h3>Location</h3>
      </div>
      <div className="rq-contact-us-map">
        <div id="listing-map">
          <Map />
        </div>
      </div>
    </div>
  );
}
export default CarLocation;
