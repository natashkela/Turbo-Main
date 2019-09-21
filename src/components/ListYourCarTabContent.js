import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ListYourCarContent from './ListYourCarContent';
class ListYourCarTabContent extends Component{
  state = {
    tabs:[
      {
        title:"General Information",
        isActive:true,
        uniqueName:"general-info"
      },
      {
        title:"Profile Photo",
        isActive:false,
        uniqueName:"profile-photo"
      },
      {
        title:"Mobile Number",
        isActive:false,
        uniqueName:"mobile-number"
      },
      {
        title:"Car Details",
        isActive: false,
        uniqueName:"car-details"
      },
      {
        title:"Car Availability",
        isActive: false,
        uniqueName:"car-availability"
      },
      {
        title:"Car Photos",
        isActive: false,
        uniqueName:"car-photos"
      }
    ]
  }
  handleTabClick(event,name){
    event.preventDefault();
    this.setState(prevState=>
      prevState.tabs.map((tab,index)=>
          tab.isActive = (tab.uniqueName==name)
      )
    )
  }
  render(){
    return (
      <div className="container list-your-car-container">
        <div className="row margin-top-30">
          <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
            <div id="elements-menu">
              <ul className="nav nav-stacked rq-elements-menu">
                {this.state.tabs.map((tab,index)=>
                  <li onClick={(event) => this.handleTabClick(event,tab.uniqueName)} key={index} className={tab.isActive ? "active" : ""}><a href={"#"+tab.uniqueName}>{tab.title}</a></li>
                )}
              </ul>
            </div>
          </div>
          <div className="list-your-car-xs-navigation margin-bottom-40 col-xs-12 col-sm-12 hidden-md hidden-lg text-center">
            <div className="btn-group">
              <button type="button" className="rq-btn rq-btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.tabs.map((tab,index)=>
                  tab.isActive ? tab.title : ""
                )}
                {this.state.tabs.length > 1 &&
                  <span className="margin-left-5 caret"></span>
                }
              </button>
              <div className="dropdown-menu">
                {this.state.tabs.map((tab,index)=>
                  <a className={tab.isActive ? "dropdown-item active" : "dropdown-item"} onClick={(event) => this.handleTabClick(event,tab.uniqueName)} key={index} href={"#"+tab.uniqueName}>{tab.title}</a>
                )}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            {this.state.tabs.map((tab,index)=>
              <div key={index} id={tab.uniqueName} className={tab.isActive ? "active" : "hidden"}>
                <ListYourCarContent tab={tab} isLoggedIn={this.props.isLoggedIn} customerInformation={this.props.customerInformation}/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
ListYourCarTabContent.propTypes = {
  isLoggedIn: PropTypes.bool,
  customerInformation: PropTypes.object
}
export default ListYourCarTabContent;
