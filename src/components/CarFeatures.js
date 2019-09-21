import React,{Component} from 'react';
import PropTypes from 'prop-types';
import CarReview from './CarReview.js';
import CarDescription from './CarDescription.js';
import CarFeaturesList from './CarFeaturesList.js';
class CarFeatures extends Component{
  state = {
    tabs:[
      {
        title:"Features",
        id:"listing_tab_hor_1",
        isActive:true
      },
      {
        title:"Description",
        id:"listing_tab_hor_2",
        isActive:false
      },
      {
        title:"Reviews",
        id:"listing_tab_hor_3",
        isActive:false
      }
    ]
  }
  handleSelectTab(selectedIndex){
    this.setState(prevState=>{
      prevState.tabs.map((tab,index)=>
        index==selectedIndex ? tab.isActive = true : tab.isActive = false
      )
    });
  }
  render(){
    return(
      <div className="rq-feature-tab">
        <div className="rq-blog-listing">
          <ul className="nav nav-tabs" role="tablist">
            {this.state.tabs.map((tab,index)=>
              <li key={index} onClick={()=>this.handleSelectTab(index)}  className={tab.isActive ? "active" : ""}><a href="#">{tab.title}</a></li>
            )}
          </ul>
          <div className="tab-content">
            <CarFeaturesList features={this.props.car.features} index={0} id="listing_tab_hor_1" isActive={this.state.tabs[0].isActive}/>
            <CarDescription description={this.props.car.description} index={1} id="listing_tab_hor_2" isActive={this.state.tabs[1].isActive}/>
            <CarReview reviews={this.props.reviews} index={2} submitReview={this.props.submitReview} id={"listing_tab_hor_3"} isActive={this.state.tabs[2].isActive}/>
          </div>
        </div>
      </div>
    );
  }
}
CarFeatures.propTypes={
  car: PropTypes.object,
  reviews:PropTypes.array,
  submitReview:PropTypes.func
}
export default CarFeatures;
