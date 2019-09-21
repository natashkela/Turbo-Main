import React from 'react';
import PropTypes from 'prop-types';
const BlogPostDescription = ({information}) => {
  return (
    <div className="rq-listing-single">
      <div className="rq-listing-standard-image-post">
        <img src={require("../img/blog-listing/listing-img.png")} alt="" />
        <h3 className="rq-listing-title"><a href={"/blog-post?id="+information.blogId}>{information.title}</a></h3>
        <div className="rq-listing-meta">
          <span className="author-name">{information.author}</span>
          <span className="v-line">|</span>
          <span className="date">{information.date}</span>
        </div>
        <p className="post-content">
          {information.shortDescription}
        </p>
        <a className="continue-btn rq-btn rq-btn-normal" href={"/blog-post?id="+information.blogId}>Continue <i className="arrow_right"></i></a>
      </div>
    </div>
  );
}
BlogPostDescription.propTypes = {
  information: PropTypes.object
}
export default BlogPostDescription;
