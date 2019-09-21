import React,{Component} from 'react';
import Testimonial from './Testimonial.js';
class TestimonialsContainer extends Component {
  state = {
     list: [
      {
        isActive:true,
        author:"Adam Levine",
        stars: 4,
        userId:1,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus."
      },
      {
        isActive:false,
        author:"Tea Tsintsadze",
        stars: 5,
        userId:2,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus."
      },
      {
        isActive:false,
        author:"Nino Kudava",
        stars: 3,
        userId:3,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus."
      },
      {
        isActive:false,
        author:"Tiko Vacheishvili",
        stars: 5,
        userId:4,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus."
      }
    ]
  }
  handleTestimonialDotClick = (index) => {
    let testimonialList = this.state.list;
    testimonialList.map((testimonial, tabIndex)=>{
      if(tabIndex!==index){
        testimonial.isActive=false
      }
      else{
        testimonial.isActive=true
      }
    });
    this.setState(testimonialList);
  
  }
  render(){
    return (
    <div className="rq-testimonial-section">
      <div className="rq-testimonial-content">
        <h1 className="rq-title">What Clients Say<span className="rq-dot">.</span></h1>
        <div className=" owl-carousel testimonial-wrapper owl-theme owl-center owl-loaded">
          <div className="owl-stage-outer">
            {this.state.list.map((testimonial,index)=>
              <Testimonial key={index} isActive={testimonial.isActive} userId={testimonial.userId} author={testimonial.author} comment={testimonial.comment} stars={testimonial.stars} />
            )}
          </div>
          <div className="owl-controls">
              <div className="owl-dots">
              {this.state.list.map((testimonial,index)=>
                <div key={index} onClick={()=>this.handleTestimonialDotClick(index)} className={testimonial.isActive ? "owl-dot active" : "owl-dot"}>
                  <span></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }
}
export default TestimonialsContainer;
