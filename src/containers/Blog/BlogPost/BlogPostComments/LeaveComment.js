import React,{Component} from 'react';
class LeaveComment extends Component {
  Comment = React.createRef();
  state = {
    userId:1,
    author: "Nata Vacheishvili",
    comment: ""
  }
  handleCommentChange(){
    let com = this.Comment.current.value;
    this.setState(prevState=>{
      return{
        comment: com
      }
    });
  }
  render(){
    return (
      <div id="respond" className="comment-respond">
        <h2 className="single-sub-title">Leave a comment</h2>
        <form id="commentform" className="commentform" action="#" onSubmit={(event)=>this.props.submitComment(event,this.state.author,this.state.comment,this.state.userId, this.Comment)}>
          <div className="row">
            <div className="col-md-12">
              <textarea className="comment-input"  ref={this.Comment} onChange={()=>this.handleCommentChange()} placeholder="Here goes your comment"></textarea>
            </div>
            <div className="col-md-12">
              <button type="submit" className="continue-btn rq-btn rq-btn-normal">Submit Comment</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default LeaveComment;
