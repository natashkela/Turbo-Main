import React, {Component} from 'react';
import Navbar from './Navbar.js';
import BreadcrumbSecondary from './BreadcrumbSecondary.js';
import BlogCategories from './BlogCategories.js'
import BlogCategoryContent from './BlogCategoryContent.js';
import Footer from './Footer.js';
class Blog extends Component {
  state = {
    blogPerPage:5,
    page:1,
    title: "Blog",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"Blog"
     }
   ],
   blog_posts:[
     {
       categories:[0,1,3,5],
       blogId:1,
       title:"Title Of Single Post With Image Format",
       date:"15/02/2016",
       author:"Logan cee",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,1,2],
       blogId:2,
       title:"Title Of Single Post With Gallery Format",
       date:"15/02/2016",
       author:"Nata Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,4],
       blogId:3,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,2,5],
       blogId:4,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Natas Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,4],
       blogId:5,
       title:"Title Of Single Post With Audio Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,1,3,5],
       blogId:6,
       title:"Title Of Single Post With Image Format",
       date:"15/02/2016",
       author:"Logan cee",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,1,2],
       blogId:7,
       title:"Title Of Single Post With Gallery Format",
       date:"15/02/2016",
       author:"Nata Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,4],
       blogId:8,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,2,5],
       blogId:9,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Natas Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,4],
       blogId:10,
       title:"Title Of Single Post With Audio Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,1,3,5],
       blogId:11,
       title:"Title Of Single Post With Image Format",
       date:"15/02/2016",
       author:"Logan cee",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,1,2],
       blogId:12,
       title:"Title Of Single Post With Gallery Format",
       date:"15/02/2016",
       author:"Nata Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,4],
       blogId:13,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,2,5],
       blogId:14,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Natas Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[0,4],
       blogId:15,
       title:"Title Of Single Post With Audio Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     }
   ],
   blog_categories:[
     {
       id:0,
       title:"All",
       uniqueName:"all",
       isActive:true
     },
     {
       id:1,
       title:"Business",
       uniqueName:"business",
       isActive:false
     },
     {
       id:2,
       title:"LifeStyle",
       uniqueName:"lifestyle",
       isActive:false
     },
     {
       id:3,
       title:"Entertainment",
       uniqueName:"entertainment",
       isActive:false
     },
     {
       id:4,
       title:"Technology",
       uniqueName:"technology",
       isActive:false
     },
     {
       id:5,
       title:"Car Industry News",
       uniqueName:"car-industry-news",
       isActive:false
     }
   ]
  }
  handleNextPage(currentPage,categoryId){
    let total = this.getTotalPagesForCategory(categoryId);
    if(currentPage<=total){
      this.setState(prevState=>
        prevState.page++
      )
    }
  }
  handlePreviousPage(currentPage){
    if(currentPage>1){
      this.setState(prevState=>
        prevState.page--
      )
    }
  }
  getTotalPagesForCategory(categoryId){
    return Math.ceil(this.getAllPostsForCategory(categoryId).length/this.state.blogPerPage);
  }
  getAllPostsForCategory(categoryId){
    let blogPosts = [];
    this.state.blog_posts.map((blogPost,index)=> {
        return blogPost.categories.includes(categoryId) ? blogPosts.push(blogPost) : ""
      }
    )
    return blogPosts;
  }
  handleActivateCategory(categoryIndex){
    this.setState(prevState=>{
      return prevState.blog_categories.map((category,index)=>
        index==categoryIndex ? category.isActive = true : category.isActive = false
      )
    })
    this.setState(prevState=>{
      return prevState.page = 1
    })
  }
  render(){
    return (
      <div className="blog">
        <Navbar />
        <div className="rq-page-content">
          <div className="rq-content-block">
            <div className="container">
              <BreadcrumbSecondary breadcrumbs={this.state.breadcrumbs} title={this.state.title} />
              <div className="rq-blog-listing">
                <BlogCategories activateCategory={this.handleActivateCategory.bind(this)} list={this.state.blog_categories}/>
                <BlogCategoryContent blogPerPage={this.state.blogPerPage} currentPage={this.state.page} total={this.getTotalPagesForCategory.bind(this)} blogCategories={this.state.blog_categories} blogPosts={this.getAllPostsForCategory.bind(this)} nextPage={this.handleNextPage.bind(this)} previousPage={this.handlePreviousPage.bind(this)} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Blog;
