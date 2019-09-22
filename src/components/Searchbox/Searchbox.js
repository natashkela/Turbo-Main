import React from 'react';
import PropTypes from 'prop-types';
const Searchbox = ({withoutBorder}) => {
  return (
    <div className={withoutBorder ? "rq-search-container" : "rq-search-container with-border"}>
      <div className="rq-search-single">
        <div className="rq-search-content">
          <span className="rq-search-heading">Location</span>
          <select name="categories" className="category-option">
            <option value="0">Pick a location</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
          </select>
        </div>
      </div>
      <div className="rq-search-single">
        <div className="rq-search-content">
          <span className="rq-search-heading">Pick up</span>
          <input type="text" name="datefilter" className="rq-form-element datepicker" id="startdate" placeholder="Pick up date"/>
          <i className="ion-chevron-down datepicker-arrow"></i>
        </div>
      </div>
      <div className="rq-search-single">
        <div className="rq-search-content">
          <span className="rq-search-heading">Return</span>
          <input type="text" name="datefilter" className="rq-form-element" id="enddate" placeholder="Return date"/>
          <i className="ion-chevron-down datepicker-arrow"></i>
        </div>
      </div>
      <div className="rq-search-single">
        <div className="rq-search-content last-child">
          <span className="rq-search-heading">Driver age</span>
          <select name="categories" className="category-option">
            <option value="0">25 Years old</option>
            <option value="1">25 Years old</option>
            <option value="2">25 Years old</option>
            <option value="3">25 Years old</option>
            <option value="4">25 Years old</option>
            <option value="5">25 Years old</option>
          </select>
        </div>
      </div>
      <div className="rq-search-single search-btn">
        <div className="rq-search-content">
          <button className="rq-btn rq-btn-primary fluid-btn">Search <i className="arrow_right"></i></button>
        </div>
      </div>
    </div>
  );
}
Searchbox.propTypes={
  withoutBorder: PropTypes.bool
}
export default Searchbox;
