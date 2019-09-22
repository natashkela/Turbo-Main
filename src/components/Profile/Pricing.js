import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, InputGroup, FormControl} from 'react-bootstrap';
const Pricing = ({carDescription}) => {
    return (
        <div className="pricing">
            <h5 className="margin-top-10 margin-bottom-0"><strong>Pricing</strong></h5>
            <p>
                Set your default daily price. The price saved here will be reduced according
                to discounts entered below.
            </p>
            <div className="row default-price-section">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon className="pricing-daily-dollar">$</InputGroup.Addon>
                            <FormControl className="pricing-daily" type="text"  placeholder="Default Price" />
                        </InputGroup>
                    </FormGroup>
                </div>
            </div>
            <h5 className="margin-top-30 margin-bottom-0"><strong>Discounts</strong></h5>
            <p>
                Encourage guests to book longer, more profitable trips by offering weekly and
                monthly discounts
            </p>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <FormGroup>
                        <InputGroup>
                            <FormControl className="pricing-daily" type="text"  placeholder="Weekly" />
                            <InputGroup.Addon className="pricing-daily-dollar">%</InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    <p>
                        Recommended: 15%
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <FormGroup>
                        <InputGroup>
                            <FormControl className="pricing-daily" type="text"  placeholder="Monthly" />
                            <InputGroup.Addon className="pricing-daily-dollar">%</InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    <p>
                        Recommended: 30%
                    </p>
                </div>
            </div>
        </div>
    );
}
Pricing.propTypes= {
    carDescription : PropTypes.object
}
export default Pricing;