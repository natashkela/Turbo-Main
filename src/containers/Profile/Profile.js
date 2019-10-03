import React,{Component} from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import BreadcrumbTernary from '../../components/Breadcrumbs/BreadcrumbTernary';
import ProfileTabContent from './ProfileTabContent';
import Footer from '../../components/Footer/Footer.js';
class Profile extends Component{
  state = {
    isLoggedIn:true,
    hasCar:true,
    title: "Profile",
    breadcrumbs: [
      {
        title: "Home",
        href: "/"
      },
      {
        title:"My Profile"
      }
    ],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet dolor vel ex aliquet tincidunt.",
    profile:{
      id:1,
      firstName:"Nata",
      lastName:"Vacheishvili",
      phone:"+17742320539",
      phoneCountry: "usa",
      username:"nvacheishvili",
      email:"nvacheishvili@wpi.edu",
      country:"GE",
      city:"Tbilisi",
      licenseNum:"123456",
      aboutme: "I made this website wohooo",
      licenseCountry:"GE",
      password:"",
      repassword:""
    },
    errorLog:[]
  }
  handleSelectCountry(val){
    this.setState(prevState=>prevState.profile.country=val);
  }
  handleSelectCountryLicense(val){
    this.setState(prevState=>prevState.profile.licenseCountry=val);
  }
  handleSelectCity(val){
    this.setState(prevState=>prevState.profile.city=val);
  }
  handleEmailChange(val){
    let value = val.target.value;
    this.setState(prevState=>prevState.profile.email=value);
  }
  handleDriverLicenseNumberChange(val){
    let value = val.target.value;
    this.setState(prevState=>prevState.profile.licenseNum=value);
  }
  handleAboutMeChange(val){
    let value = val.target.value;
    this.setState(prevState=>prevState.profile.aboutme=value);
  }
  handleFirstNameChange(val){
    let value = val.target.value;
    this.setState(prevState=>prevState.profile.firstName=value);
  }
  handleLastNameChange(val){
    let value = val.target.value;
    this.setState(prevState=>prevState.profile.lastName=value);
  }
  handlePasswordChange(val){
    let value = val.target.value;
    console.log(value);
    this.setState(prevState=>prevState.profile.password=value);
  }
  handleRePasswordChange(val){
    let value = val.target.value;
    if(this.state.profile.password!=value&&(!this.state.errorLog.includes("Passwords Do Not Match"))){
      this.setState(prevState=>prevState.errorLog.push("Passwords Do Not Match"));
    }
    else if(this.state.profile.password==value){
      let index = this.state.errorLog.indexOf("Passwords Do Not Match");
      this.setState(prevState=>prevState.errorLog.splice(index,1));
    }
    this.setState(prevState=>prevState.profile.repassword=value);
  }
  render(){
    return (
        <div className="my-profile">
          <div className="my-profile-content">
            <Navbar isLoggedIn={this.state.isLoggedIn} hasACar={this.state.hasACar}/>
            <BreadcrumbTernary breadcrumbs={this.state.breadcrumbs} title={this.state.title} description={this.state.description} />
            <ProfileTabContent
                errorLog={this.state.errorLog}
                profile={this.state.profile}
                isLoggedIn={this.state.isLoggedIn}
                profileFirstNameChange={this.handleFirstNameChange.bind(this)}
                profileLastNameChange={this.handleLastNameChange.bind(this)}
                profileEmailChange={this.handleEmailChange.bind(this)}
                profilePasswordChange={this.handlePasswordChange.bind(this)}
                profileRePasswordChange={this.handleRePasswordChange.bind(this)}
                profileSelectedCountryChange={this.handleSelectCountry.bind(this)}
                profileSelectedCityChange={this.handleSelectCity.bind(this)}
                profileDriversLicenseChange={this.handleDriverLicenseNumberChange.bind(this)}
                profileAboutMeChange= {this.handleAboutMeChange.bind(this)}
            />
            <Footer />
          </div>
        </div>
    );
  }
}
export default Profile;