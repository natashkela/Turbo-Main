import React, {Component} from 'react';
import Navbar from './Navbar';
import BreadcrumbSecondary from './BreadcrumbSecondary';
import BlogPostInformation from './BlogPostInformation';
import BlogPostShare from './BlogPostShare';
import RelatedPosts from './RelatedPosts';
import BlogPostComments from './BlogPostComments.js';
import Footer from './Footer';
class BlogPost extends Component{
  state={
    title: "Blog Post Title",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"Blog Post Title"
     }
   ],
   blogPost:{
     categories:["0,1,3,5"],
     blogId:1,
     title:"Title Of Single Post With Image Format",
     date:"15/02/2016",
     author:"Logan cee",
     post:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent.Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation.Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery."
   },
   blogCategories:[
     {
       id:1,
       title:"Business",
       uniqueName:"business",
       isActive:false
     },
     {
       id:3,
       title:"Entertainment",
       uniqueName:"entertainment",
       isActive:false
     },
     {
       id:5,
       title:"Car Industry News",
       uniqueName:"car-industry-news",
       isActive:false
     }
   ],
   blogComments:[
     {
       userId:1,
       author:"Nata Vacheishvili",
       content:"Comment example here. Nulla risus lacus, vehicula id mi vitae, auctor accumsan nulla. Sed a mi quam. In euismod urna ac massa.",
       date:"25/07/2018 10:35"
     },
     {
       userId:2,
       author:"Tiko Vacheishvili",
       content:"Comment example here. Nulla risus lacus, vehicula id mi vitae, auctor accumsan nulla. Sed a mi quam. In euismod urna ac massa.",
       date:"25/07/2018 10:30"
     }
   ],
   topThreeRelated:[
     {
       id:1,
       title:"SUCCESSFUL MORE IN CAR RENTAL FIELD 2016",
       date:"25/02/2018",
       author:"Nata"
     },
     {
       id:2,
       title:"SUCCESSFUL MORE IN CAR RENTAL FIELD 2016",
       date:"25/02/2018",
       author:"Nata"
     },
     {
       id:3,
       title:"SUCCESSFUL MORE IN CAR RENTAL FIELD 2016",
       date:"25/02/2018",
       author:"Nata"
     }
   ]
  }
  handleSubmitComment(event,author,comment,userId, Comment){
    event.preventDefault();
    console.log(comment);
    this.setState(prevState=>{
      return prevState.blogComments.push({author:author,content:comment, userId:userId})
    })
    Comment.current.value="";
  }
  render(){
    return(
      <div className="blog-post">
        <Navbar />
        <div className="rq-page-content">
          <div className="blog-post-single-wrapper">
            <div className="signle-post-feature-img">
              <img src={require("../img/post-single/image-post.jpg")} alt="" />
            </div>
            <div className="container">
              <div className="rq-content-block">
                <BreadcrumbSecondary title={this.state.title} breadcrumbs={this.state.breadcrumbs}/>
                <BlogPostInformation blog={this.state.blogPost} categories={this.state.blogCategories}/>
                <BlogPostShare />
                <BlogPostComments submitComment={this.handleSubmitComment.bind(this)} comments={this.state.blogComments}/>
                <RelatedPosts relatedPosts={this.state.topThreeRelated}/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default BlogPost;
