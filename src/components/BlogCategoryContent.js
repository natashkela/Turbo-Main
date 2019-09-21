import React from 'react';
import PropTypes from 'prop-types';
import BlogPostDescription from './BlogPostDescription.js';
import Pagination from './Pagination';
const BlogCategoryContent = ({blogPerPage, blogCategories,blogPosts,currentPage,nextPage,previousPage,total}) => {
  let categoryBlogPosts = [];
  let totalPages = 0;
  return (
    <div className="tab-content">
      {blogCategories.map((category,index)=>{
        {categoryBlogPosts = blogPosts(category.id).slice((currentPage-1)*blogPerPage,(blogPerPage*currentPage));
        totalPages = total(category.id); }
        return <div key={index} role="tabpanel" className={category.isActive ? "tab-pane fade in active" : "tab-pane fade in"} id={category.uniqueName}>
          <div className="rq-listing-wrapper">
            {categoryBlogPosts.map((blogPost, index)=>
                <BlogPostDescription key={index} information={blogPost} />
            )}
            <Pagination categoryId={category.id} nextPage={nextPage} previousPage={previousPage} currentPage={currentPage} total={totalPages} />
          </div>
        </div>
      }
      )}
    </div>
  );
}
BlogCategoryContent.propTypes={
  blogCategories:PropTypes.array,
  blogPosts:PropTypes.func,
  currentPage:PropTypes.number,
  nextPage:PropTypes.func,
  previousPage:PropTypes.func,
  totalPages:PropTypes.func,
  blogPerPage:PropTypes.number
}
export default BlogCategoryContent;
