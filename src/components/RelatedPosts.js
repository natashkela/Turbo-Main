import React from 'react';
import PropTypes from 'prop-types';
const RelatedPosts = ({relatedPosts})=> {
  // let relatedPostImages = [];
  // relatedPosts.map((post,index)=>
  //   relatedPostImages.push("../img/post-single/related-post"+post.id+".jpg")
  // );
  // relatedPostImages.map((image,index)=>
  //     require
  // )
  return (
    <div className="related-posts">
      <h2 className="single-sub-title">related posts</h2>
      <div className="rq-blog-grid-wrapper">
        <div className="row">
          {relatedPosts.map((post,index)=>
            <div key={index} className="col-md-4">
              <a href="#">
                <div className="rq-blog-grid-single"
                style={{backgroundImage:`url(${require("../img/post-single/related-post"+post.id+".jpg")})`, backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
                  <div className="rq-overlay"></div>
                  <span className="company-name">{post.title}</span>
                  <div className="rq-listing-meta">
                    <span className="date">{post.date}</span>
                    <span className="v-line">|</span>
                    <span className="author-name"><b>by</b>{post.author}</span>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
RelatedPosts.propTypes = {
  relatedPosts: PropTypes.array
}
export default RelatedPosts;
