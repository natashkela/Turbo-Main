import React from 'react';
import PropTypes from 'prop-types';
const RecentTip = ({id, title, date}) => {
  return  (
    <div className="col-md-4">
      <div className="rq-tips-single wow fadeInLeft" data-wow-duration="500ms">
        <div className="image-container">
          <img src={require("../img/tips/tips"+id+".jpg")} alt="" />
        </div>
        <div className="tips-content">
          <span className="date">{date}</span>
          <h4><a href={"/post?id="+id}>{title}</a></h4>
          <a className="rq-btn rq-btn-normal continue-button" href={"/post?id="+id}>Continue Reading <i className="arrow_right"></i></a>
        </div>
      </div>
    </div>
  );
}
RecentTip.propTypes = {
  id:PropTypes.number,
  title:PropTypes.string,
  date:PropTypes.string
}
export default RecentTip;
