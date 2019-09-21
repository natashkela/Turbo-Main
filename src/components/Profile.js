import React,{Component} from 'react';
import Navbar from './Navbar.js';
import Breadcrumb from './Breadcrumb';
import CountryListSelect from './CountryListSelect';
import CityListSelect from './CityListSelect';
import Footer from './Footer.js';
class Profile extends Component{
  state = {
    isLoggedIn:true,
    hasCar:true,
    title: "My Profile",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"My Profile"
     }
   ],
   profile:{
     id:1,
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
        <Navbar isLoggedIn={this.state.isLoggedIn} hasCar={this.state.hasCar}/>
        <div className="rq-page-content">
          <Breadcrumb title={this.state.title} breadcrumbs={this.state.breadcrumbs}/>
          <div className="rq-content-block">
            <div className="rq-about-us-content-wrapper">
            <div className="product">
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div>
                      <div className="title">
                        <h3 className="elements-title">Update Profile Information</h3>
                      </div>
                      {this.state.errorLog.length>0 &&
                      <div className="alert alert-danger margin-bottom-15" role="alert">
                        {this.state.errorLog.map((error,index)=>
                          <span key={index}>{error}</span>
                        )}
                        </div>
                      }
                      <form method="POST" encType="multipart/form-data" id="update_profile" >
                        <input type="hidden" name="action" value="profile-update" />
                        <input type="hidden" name="id" value="1" />
                        <img src={this.state.profile.id && this.state.profile.username ? require("../img/users/"+this.state.profile.id+"-"+this.state.profile.username+".jpg") : require("../img/users/avatar.jpg")} style={{width:"200px",height:"200px"}} className="img-responsive" />
                        <br />
                        <input type="file" className="file rq-form-control" name="preview-image" data-filename-placement="inside" />
                        <br />
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="text" className="rq-form-control" onChange={this.handleEmailChange.bind(this)}  id="email" name="email" value={this.state.profile.email ? this.state.profile.email : ""} placeholder="Jane Doe" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" className="rq-form-control" onChange={this.handlePasswordChange.bind(this)}  id="password" name="password" value={this.state.profile.password ? this.state.profile.password : ""} placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="re_password">Repeat Password</label>
                          <input type="password" className="rq-form-control" onChange={this.handleRePasswordChange.bind(this)}  id="re_password" name="re_password" value={this.state.profile.repassword ? this.state.profile.repassword : ""} placeholder="" />
                        </div>
                        <div className="form-group country">
                          <label htmlFor="location">Country</label>
                          <CountryListSelect selected={this.state.profile.country} selectCountry={this.handleSelectCountry.bind(this)} />
                        </div>
                        <div className="form-group city">
                          <label htmlFor="location">City</label>
                          <CityListSelect countrySelected={this.state.profile.country} selectRegion={this.state.profile.city} selectCity={this.handleSelectCity.bind(this)}/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="drivers_license">Driver License Number</label>
                          <input type="text" className="rq-form-control" onChange={this.handleDriverLicenseNumberChange.bind(this)}  id="drivers_license" name="drivers_license" value={this.state.profile.licenseNum ? this.state.profile.licenseNum : ""} placeholder="License Number" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="aboutme">About me</label>
                          <textarea className="rq-form-control"  rows={5} onChange={this.handleAboutMeChange.bind(this)} value={this. state.profile.aboutme ? this.state.profile.aboutme : ""}>
                          </textarea>
                        </div>
                        <button type="submit" className="btni margin-bottom-15 rq-btn rq-btn-primary btn-large border-radius">Save</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Profile;
