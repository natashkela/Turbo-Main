import React, {Component} from 'react';
class ListYourCarPhotos extends Component{
  render(){
    return(
      <div className="list-your-car-photos margin-bottom-40">
        <h5 className="margin-top-10 margin-bottom-0"><strong>Car Photos</strong></h5>
        <p className="margin-top-10">
          It's important for travelers to see your car before they request it. Once you have a good photo
          that shows the whole car, add more photos dislpaying the car's details and interior. <a href="#">Learn More about taking pictures here</a>
        </p>
        <div className="row margin-top-5">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <span className="more-info">Photos must be a at least 870px x 465px and smaller than 10mb</span>
          <div className="margin-top-30">
            <button type="submit" className="rq-btn rq-btn-primary btn-large"> Finish </button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default ListYourCarPhotos;
