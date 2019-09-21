import React, {Component} from 'react';
import CountryListSelect from './CountryListSelect';
import CityListSelect from './CityListSelect';
class ListYourCarGeneralInfo extends Component {
  state={
    carLocationCountry:"",
    carLocationCity:""
  }
  handleSelectCountry(val){
    this.setState(prevState=>prevState.carLocationCountry=val);
  }
  handleSelectCity(val){
    this.setState(prevState=>prevState.carLocationCity=val);
  }
  render(){
    return (
      <div className="list-your-car-general-info margin-bottom-40">
        <h5 className="margin-top-10 margin-bottom-0"><strong>Where is your car located?</strong></h5>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent">
            <CountryListSelect selected={this.state.carLocationCountry} selectCountry={this.handleSelectCountry.bind(this)}/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent">
            <CityListSelect countrySelected={this.state.carLocationCountry} citySelected={this.state.carLocationCity} selectRegion={this.handleSelectCity.bind(this)} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" className="rq-form-control" placeholder="Your Car Address" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" className="rq-form-control" placeholder="Zip Code" />
          </div>
        </div>
        <h5 className="margin-top-25 margin-bottom-0"><strong>Car Information</strong></h5>
        //@todo - get the car query api database online
        <div className="row no-border">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent">
            <select className="rq-form-control reverse">
              <option>Car Make</option>
            </select>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent">
            <select className="rq-form-control reverse">
              <option>Car Year</option>
            </select>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent">
            <select className="rq-form-control reverse">
              <option>Car Name</option>
            </select>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 select-transparent margin-bottom-40">
            <select className="rq-form-control reverse">
              <option>Car Trim</option>
            </select>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label>
              <input type="checkbox" className="rq-form-control width-auto margin-right-5" />
              I have an insurance policty that covers commercial rental transaction
            </label>
          </div>
        </div>
      </div>
    )
  }
}
export default ListYourCarGeneralInfo;
