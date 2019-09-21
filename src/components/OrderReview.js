import React from 'react';
import PropTypes from 'prop-types';
const OrderReview = ({orderReview, index, activePanel, reservedCarShortInfo})=>{
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" onClick={()=>activePanel(index)} id="order-review-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#order-review" aria-expanded="true" aria-controls="order-review">
            Order Review
          </a>
        </h4>
      </div>
      <div id="order-review" className={orderReview ? "panel-collapse collapse in" : "panel-collapse collapse"} role="tabpanel" aria-labelledby="order-review-heading">
        <div className="panel-body">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={require("../img/car-listing-grid/car1.jpg")} alt="" />
              <div className="author-img" style={{backgroundImage:`url(${require("../img/about-us/about-us-our-team-1.jpg")})`,backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="author-name">
                <a href="#">{reservedCarShortInfo.author}</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Car
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.brand+" "+reservedCarShortInfo.model}
                    </span>
                  </div>
              </div>
              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Year
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.year}
                    </span>
                  </div>
              </div>
              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Reservation Start Date
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.startDate}
                    </span>
                  </div>
              </div>
              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Reservation End Date
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.endDate}
                    </span>
                  </div>
              </div>
              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Total Car Price
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.totalCarPrice} GEL
                    </span>
                  </div>
              </div>

              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Discount
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.discountPercent}%
                    </span>
                  </div>
              </div>

              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Total Discounted price
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.totalCarDiscountedPrice} GEL
                    </span>
                  </div>
              </div>

              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Taxes and Fees
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.taxes} GEL
                    </span>
                  </div>
              </div>

              <div className="row margin-bottom-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Total Price
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span className="black">
                      {reservedCarShortInfo.totalPrice} GEL
                    </span>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
OrderReview.propTypes = {
  orderReview:PropTypes.bool,
  index: PropTypes.number,
  activePanel: PropTypes.func,
  reservedCarShortInfo:PropTypes.object
}
export default OrderReview;
