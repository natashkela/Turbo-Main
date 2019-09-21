import React from 'react';
import PropTypes from 'prop-types';
const CarListViewType = ({list,viewType})=>{
  return(
    <div className={viewType ? "rq-listing-choose rq-listing-grid" : "rq-listing-choose rq-listing-list"}>
      <div className="row">
        {list.map((grid,index)=>
          <div key={index} className="col-md-4 col-sm-6">
            <div className="listing-single">
              <div className="listing-img">
                <img src={require("../img/car-listing-grid/car"+grid.id+".jpg")} alt="" />
              </div>
              <div className="listing-details">
                <h5 className="car-brand">{grid.brand}</h5>
                <h3 className="car-name"><a href={"/car?id="+grid.id}>{grid.brand+grid.model}</a></h3>
                <ul className="rating-list">
                  {Array.apply(null, { length: grid.stars }).map((e, i) =>
                      <li key={i}><i className="ion-star"></i></li>
                    )
                  }
                </ul>
                <ul>
                  <li>Transmission: <span>{grid.transmission ? "Automatic" : "Manual"}</span></li>
                  <li>Body Style: <span>{grid.bodyStyle}</span></li>
                </ul>
                <div className="listing-footer">
                  <span><a href={"/car?id="+grid.id}>Details</a></span>
                  <span>
                    Starting at <span className="price">${grid.price}</span> / day
                  </span>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
CarListViewType.propTypes={
  list:PropTypes.array,
  viewType:PropTypes.number
}
export default CarListViewType;
