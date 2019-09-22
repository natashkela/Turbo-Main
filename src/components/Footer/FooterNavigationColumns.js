import React from 'react';
import PropTypes from 'prop-types';
const FooterNavigationColumns = ({list}) => {
  return (
    <div className="row">
      {list.map((column,index)=>
        <div className="col-md-3 col-sm-3" key={index}>
          <div className="widget-list">
            <ul>
            {column.map((item,counter)=>
              <li  key={counter}><a href={item.href}>{item.name}</a></li>
            )}
            </ul>
          </div>
        </div>
      )}
      <div className="col-md-3 col-sm-3">
        <div className="widget-list">
          <div className="rq-newsletter">
            <h5>Sign up for get our newsletter</h5>
            <form action="#">
              <input className="fq-newsletter-form" type="text" placeholder="Your Email..." />
              <button className="rq-btn" type="submit"><i className="ion-android-send"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
FooterNavigationColumns.propTypes = {
  list: PropTypes.array
}
export default FooterNavigationColumns;
