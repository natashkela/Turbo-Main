import React from 'react';
import PropTypes from 'prop-types';
const TabAvailableCarsLong = ({list,id}) => {
  return (
    <div role="tabpanel" className="tab-pane fade in active" id={id}>
      <div className="tab-content">
        {list.map((tabpanel,index)=>
          <div role="tabpanel" key={index} className={index == 0 ? "tab-pane fade in active" : "tab-pane fade in"} id={id+'-'+(index+1)}>
            <div className="rq-tab-car-details">
              <div className="car-logo">
                <img src={require("../img/partner-logo/partner"+(index+1)+".png")} alt="" />
              </div>
              <h3>Lamborghini Aventado</h3>
              <div className="large-image-wrapper">
                <div className="image-bg"></div>
                <img src={require("../img/tab-image/full-img"+(index+1)+".png")} alt="" />
              </div>
              <div className="car-details-option">
                <span><i className="ion-briefcase"></i>{tabpanel.luggage_space}</span>
                <span><i className="ion-no-smoking"></i>{tabpanel.smoking_allowed ? "Smoking Allowed" : "No Smoking"}</span>
                <span><i className="ion-speedometer"></i>{tabpanel.kilomeeters} km</span>
                <span>Starting at <span className="red-section">${tabpanel.price}</span>/day</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
TabAvailableCarsLong.propTypes = {
  list: PropTypes.array,
  id: PropTypes.string
}
export default TabAvailableCarsLong;
