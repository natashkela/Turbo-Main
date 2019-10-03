import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ProfileContent from '../../components/Profile/ProfileContent';
class ProfileTabContent extends Component{
    state = {
        tabs:[
            {
                title:"My Profile",
                isActive:true,
                uniqueName:"profile"
            },
            {
                title:"Inbox",
                isActive: false,
                uniqueName:"inbox"
            },
            {
                title:"Calendar",
                isActive:false,
                uniqueName:"calendar"
            },
            {
                title:"Pricing",
                isActive:false,
                uniqueName:"pricing"
            },
            {
                title:"Delivery & Airports",
                isActive: false,
                uniqueName:"car-delivery"
            },
            {
                title:"Location",
                isActive: false,
                uniqueName:"location"
            },
            {
                title:"Guest Instructions",
                isActive: false,
                uniqueName:"guest-instructions"
            },
            {
                title:"Car Photos",
                isActive: false,
                uniqueName:"car-photos"
            },
            {
                title:"Car Details",
                isActive: false,
                uniqueName:"car-details"
            },
            {
                title:"Trip History",
                isActive: false,
                uniqueName:"history"
            },
            {
                title:"Trip Preferences",
                isActive: false,
                uniqueName:"trip-preferences"
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
            <div className="container profile-tab-container">
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
                                <ProfileContent
                                    errorLog={this.props.errorLog}
                                    tab={tab}
                                    profile={this.props.profile}
                                    isLoggedIn={this.props.isLoggedIn}
                                    profileFirstNameChange={this.props.profileFirstNameChange}
                                    profileLastNameChange={this.props.profileLastNameChange}
                                    profileEmailChange={this.props.profileEmailChange}
                                    profilePasswordChange={this.props.profilePasswordChange}
                                    profileRePasswordChange={this.props.profileRePasswordChange}
                                    profileSelectedCountryChange={this.props.profileSelectedCountryChange}
                                    profileDriversLicenseChange={this.props.profileDriversLicenseChange}
                                    profileSelectedCityChange={this.props.profileSelectedCityChange}
                                    profileAboutMeChange= {this.props.profileAboutMeChange}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
ProfileTabContent.propTypes = {
    isLoggedIn: PropTypes.bool,
    customerInformation: PropTypes.object,
    errorLog: PropTypes.array,
    profile: PropTypes.object,
    profileFirstNameChange: PropTypes.func,
    profileLastNameChange: PropTypes.func,
    profileEmailChange: PropTypes.func,
    profilePasswordChange: PropTypes.func,
    profileRePasswordChange: PropTypes.func,
    profileSelectedCountryChange: PropTypes.func,
    profileSelectedCityChange: PropTypes.func,
    profileDriversLicenseChange: PropTypes.func,
    profileAboutMeChange: PropTypes.func

}
export default ProfileTabContent;