import React from 'react';
import PropTypes from 'prop-types';
const Comment = ({comment}) => {
  return (
    <div className="comment-wrapper">
      <ol className="comment-list">
        <li className="comment">
          <div className="comment-author-img">
            <img src={require("../img/post-single/comment-img"+comment.userId+".jpg")} alt="" />
          </div>
          <div className="comment-details">
            <span className="author-name"><span className="name">{comment.author}</span></span>
            <span className="comment-text">{comment.content}
            </span>
            <span className="date">{comment.date}</span>
          </div>
        </li>
      </ol>
    </div>
  );
}
Comment.propTypes = {
  comment: PropTypes.object
}
export default Comment;
