import React from 'react';
import PropTypes from 'prop-types';
const BlogPostInformation = ({blog,categories})=>{
  let bgImage = require("../img/post-single/single-post-author.jpg");
  return (
    <div className="blog-post-information">
      <div className="rq-single-post-header row">
        <div className="author-info-content col-md-4">
          <div className="author-img" style={{backgroundImage:'url("'+bgImage+'")',backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <span className="author-name"><a href="#">Author</a></span>
          <span className="author-role">{blog.author}</span>
        </div>
        <div className="post-cat-tag col-md-6">
          <div className="post-cat-tag-single">
            <span className="cat-title">Category</span>
            <span className="cat-details">
              {categories.map((category,index)=>
                <a key={index} href={"/blog/category/"+category.uniqueName}>{category.title}{index!==categories.length-1 ? ", " : ""}</a>
              )}
            </span>
          </div>
        </div>
        <div className="post-cat-tag col-md-2">
          <div className="post-cat-tag-single ">
            <span className="cat-title">Date</span>
            <span className="cat-details"><a href="#">{blog.date}</a></span>
          </div>
        </div>

      </div>
      <div className="post-content">
        <p>{blog.post}</p>
      </div>
    </div>
  );
}
BlogPostInformation.propTypes = {
  blog:PropTypes.object,
  categories:PropTypes.array
}
export default BlogPostInformation;
