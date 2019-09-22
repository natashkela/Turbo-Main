import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import LeaveComent from './LeaveComment';
const BlogPostComments = ({comments,submitComment}) => {
  return (
    <div id="comments" className="post-comment-section">
      {comments.length>0 &&
        <div className="blog-comments-container">
          <h2 className="single-sub-title">{comments.length} Comments</h2>
          {comments.map((comment,index)=>
            <Comment key={index} comment={comment}/>
          )}
        </div>
      }
      {comments.length<1 &&
        <div className="margin-bottom-40">
          <h3> No comments yet, we would love to hear from you! </h3>
        </div>
      }
      <LeaveComent submitComment={submitComment}/>
    </div>
  );
}
BlogPostComments.propTypes={
  comments:PropTypes.array,
  submitComment:PropTypes.func
}
export default BlogPostComments;
