import React,{Component} from 'react';
class ListYourCarDetails extends Component {
  state = {
    features: [
      {
        name: "EV/Hybrid",
        hasFeature:false
      },
      {
        name: "Bike Rack",
        hasFeature:false
      },
      {
        name: "All-wheel Drive",
        hasFeature:true
      },
      {
        name: "Child Seat",
        hasFeature:true
      },
      {
        name: "Snow tired/Chains",
        hasFeature:true
      },
      {
        name: "GPS",
        hasFeature:true
      },
      {
        name: "Ski Rack",
        hasFeature:false
      },
      {
        name: "Bluetooth",
        hasFeature:false
      },
      {
        name: "USB Input",
        hasFeature:true
      },
      {
        name: "Heated Seats",
        hasFeature:false
      },
      {
        name: "Audio Input",
        hasFeature:false
      },
      {
        name: "Convertible",
        hasFeature:true
      },
      {
        name: "Pet Friendly",
        hasFeature:false
      },
      {
        name: "Sunroof",
        hasFeature:true
      }
    ]
  }
  render() {
    return (
      <div className="list-your-car-details">
        <h5 className="margin-top-10 margin-bottom-0"><strong>Car Details</strong></h5>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" className="rq-form-control" placeholder="License Plate Number" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" className="rq-form-control" placeholder="Default Daily Rate in GEL" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <textarea rows={10} className="rq-form-control" placeholder="Car Description">
            </textarea>
          </div>
        </div>
        <h5 className="margin-top-25 margin-bottom-0"><strong>Car Information</strong></h5>
        <div className="row no-border margin-bottom-40">
          {
            this.state.features.map((feature,index)=>
                <div key={index} className={index!=this.state.features.length-1 ? "feature col-xs-12 col-sm-12 col-md-4 col-lg-4" : "feature col-xs-12 col-sm-12 col-md-4 col-lg-4 margin-bottom-40"}>
                  <label>
                    <input type="checkbox" className="rq-form-control width-auto margin-right-5" />
                    {feature.name}
                  </label>
                </div>
            )
          }
      </div>
    </div>
    );
  }
}
export default ListYourCarDetails;
