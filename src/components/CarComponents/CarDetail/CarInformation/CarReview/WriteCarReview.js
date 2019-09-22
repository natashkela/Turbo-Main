import React,{Component} from 'react';
class WriteCarReview extends Component{
  ReviewComment = React.createRef();
  state = {
    author: "Nata Vacheishvili",
    stars:0,
    comment: ""
  }
  handleStarChoice(i){
    let starNum = i+1;
    this.setState(prevState=>{
      return{
        stars: starNum
      }
    });
  }
  handleCommentChange(){
    let com = this.ReviewComment.current.value;
    this.setState(prevState=>{
      return{
        comment: com
      }
    });
  }
  render(){
    return (
      <div className="review-form">
        <h4>Write your review</h4>
        <div className="review-star">
          {Array.apply(null, { length: 5 }).map((e, i) =>
            <a key={i} onClick={()=>this.handleStarChoice(i)}><i className="ion-android-star"></i></a>
          )}
        </div>
        <div id="respond" className="comment-respond">
          <form id="commentform" className="commentform" onSubmit={(event)=>this.props.submitReview(event,this.state.author,this.state.stars,this.state.comment,this.ReviewComment)}>
            <div className="row">
              <div className="col-md-12">
                <textarea ref={this.ReviewComment} className="comment-input" onChange={()=>this.handleCommentChange()} placeholder="Here goes your review"></textarea>
              </div>
              <div className="col-md-12">
                <button type="submit" className="continue-btn rq-btn rq-btn-normal">Submit Review</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default WriteCarReview;
