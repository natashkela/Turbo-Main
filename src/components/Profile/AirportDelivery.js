import React from 'react';
import {FormGroup, InputGroup,ControlLabel, FormControl} from 'react-bootstrap';
const AirportDelivery = () => {
    let pricesForAirportPickup = [0, 10, 20, 30, 50, 100, 300, 500];
    let distancesForPickup = [1,2,5,10,20, 100,300];
    return (
        <div className="airport-delivery">
            <h5 className="margin-top-10 margin-bottom-0"><strong>Delivery and Aiports</strong></h5>
            <p>
                Earn more by offering delivery. Delivery fees include both pickup and return. You receive 90% of these fees.
            </p>
            <h5 className="margin-top-10 margin-bottom-0"><strong>Airports</strong></h5>
            <div className="row">
                <div className="margin-top-20 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className="black">TBS - Tbilisi, TB</span>
                    <p>Tbilisi International Airport</p>
                    <FormGroup className="airport-pickup-price">
                        <InputGroup>
                            <InputGroup.Addon className="pricing-daily-dollar">$</InputGroup.Addon>
                            <FormControl className="pricing-daily" componentClass="select" placeholder="Free">
                                {pricesForAirportPickup.map((price,index)=>
                                    <option key={index} value={price}>{price==0 ? "Free" : price+" GEL"} </option>
                                )}
                            </FormControl>
                        </InputGroup>
                    </FormGroup>
                </div>
            </div>
            <h5 className="margin-top-10 margin-bottom-0"><strong>Additional Instructions</strong></h5>
            <p>Guests will see this after their trip is booked</p>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <textarea className="rq-form-control" placeholder="Example: 'Please Let me know when you arrive at the airport'"></textarea>
                </div>
            </div>
            <h5 className="margin-top-10 margin-bottom-0"><strong>Guest's chosen location</strong></h5>
            <p>Offer delivery to locations chosen by your guests</p>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ControlLabel>Delivery</ControlLabel>
                    <FormGroup className="airport-pickup-price">
                        <InputGroup>
                            <InputGroup.Addon className="pricing-daily-dollar">$</InputGroup.Addon>
                            <FormControl className="pricing-daily" type="text"  placeholder="25" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className="margin-top-10 airport-pickup-price">
                        <InputGroup>
                            <InputGroup.Addon className="pricing-daily-dollar">$</InputGroup.Addon>
                            <FormControl className="pricing-daily" componentClass="select" placeholder="Free">
                                {distancesForPickup.map((distance,index)=>
                                    <option key={index} value={distance}>{distance==0 ? "Free" : "Up to "+distance+" kilometers"} </option>
                                )}
                            </FormControl>
                        </InputGroup>
                    </FormGroup>
                </div>
            </div>
        </div>
    );
}
export default AirportDelivery;