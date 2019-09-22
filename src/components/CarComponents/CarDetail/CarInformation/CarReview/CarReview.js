import React from 'react';
import PropTypes from 'prop-types';
import WriteCarReview from './WriteCarReview.js';
const CarReview = ({reviews,id,index,isActive,submitReview})=>{
  return(
    <div role="tabpanel" className={isActive ? "tab-pane active":"tab-pane"} id={id}>
      {reviews.map((review, index)=>
        <div key={index} className="rq-single-post-header">
          <div className="author-info-content">
            <div className="author-img">
            </div>
            <span className="author-name"><a href="#">{review.author}</a>
              <span>
              {Array.apply(null, { length: review.stars }).map((e, i) =>
                <i key={i} className="ion-android-star"></i>
              )}
              </span>
            </span>
            <span className="author-role">{review.comment}</span>
          </div>
        </div>
      )}
      <WriteCarReview submitReview={submitReview}/>
    </div>
  );
}
WriteCarReview.propTypes = {
  reviews:PropTypes.array,
  id:PropTypes.string,
  index:PropTypes.number,
  isActive:PropTypes.bool,
  submitReview:PropTypes.func
}
export default CarReview;
