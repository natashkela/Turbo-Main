import React from 'react';
import PropTypes from 'prop-types';
import CountryListSelect from '../CountryCitySelectors/CountryListSelect';
import CityListSelect from '../CountryCitySelectors/CityListSelect';
import ReactPhoneInput from 'react-phone-input-2';
const MyProfile = ({profile,errorLog, profileFirstNameChange, profileLastNameChange, profileEmailChange, profilePasswordChange,
                       profileRePasswordChange, profileSelectedCountryChange,
                       profileSelectedCityChange, profileDriversLicenseChange,
                       profileAboutMeChange}) => {
    return (
        <div className="list-your-car-details">
            <h5 className="margin-top-10 margin-bottom-0"><strong>Update Profile Information</strong></h5>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {errorLog.length>0 &&
                    <div className="alert alert-danger margin-bottom-15" role="alert">
                        {errorLog.map((error,index)=>
                            <span key={index}>{error}</span>
                        )}
                    </div>
                    }
                    <form>
                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                            <div>
                                <img src={profile.id && profile.username ? require("../../assets/img/users/"+profile.id+"-"+profile.username+".jpg") : require("../../assets/img/users/avatar.jpg")} style={{width:"100px",height:"100px", borderRadius:"50%"}} className=" margin-top-15" />
                                <button className="margin-left-60 rq-btn rq-btn-secondary">Upload Photo </button>
                                <p className="margin-top-10">Adding a photo helps hosts recognize each other when picking the car up</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="first-name" className="rq-form-control" onChange={(e)=>profileFirstNameChange(e)} id="firstName" name="firstName" value={profile.firstName ? profile.firstName : ""} placeholder="First Name" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="last-name" className="rq-form-control" onChange={(e)=>profileLastNameChange(e)} id="lastName" name="lastName" value={profile.lastName ? profile.lastName : ""} placeholder="Last Name" required />
                        </div>
                        <div className="col-md-6">
                            <input type="password" name="password" className="rq-form-control" onChange={(e)=>profilePasswordChange(e)}  id="password" name="password" value={profile.password ? profile.password : ""} placeholder="Password" required />
                        </div>
                        <div className="col-md-6">
                            <input type="password" name="re-password" className="rq-form-control" onChange={(e)=>profileRePasswordChange(e)}  id="repassword" value={profile.repassword ? profile.repassword : ""} placeholder="Repeat Password" required />
                        </div>
                        <div className="col-md-6">
                            <ReactPhoneInput inputClass="profile-phone-number" defaultCountry={profile.phoneCountry ? profile.phoneCountry : 'ge'} value={profile.phone ? profile.phone : ""} />
                        </div>
                        <div className="col-md-6">
                            <input type="email" name="email" className="rq-form-control" onChange={()=>profileEmailChange()}  id="email" name="email" value={profile.email ? profile.email : ""} placeholder="Email Address" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="rq-form-control" onChange={()=>profileDriversLicenseChange()}  id="drivers_license" name="drivers_license" value={profile.licenseNum ? profile.licenseNum : ""} placeholder="License Number" />
                        </div>
                        <div className="col-md-6">
                            <CountryListSelect className="region-select-profile" selected={profile.country} selectCountry={()=>profileSelectedCountryChange()} />
                        </div>
                        <div className="col-md-6">
                            <CityListSelect className="region-select-profile" countrySelected={profile.country} selectRegion={profile.city} selectCity={()=>profileSelectedCityChange()}/>
                        </div>
                        <div className="col-md-12">
              <textarea className="rq-form-control" placeholder="About me" rows={5} onChange={()=>profileAboutMeChange()} value={profile.aboutme ? profile.aboutme : ""}>
              </textarea>
                        </div>
                        <div className="col-md-12 margin-bottom-40">
                            <button type="submit" className="pull-left btni margin-bottom-15 rq-btn rq-btn-primary btn-large border-radius">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
MyProfile.propTypes= {
    profile:PropTypes.object,
    errorLog: PropTypes.array,
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
export default MyProfile;