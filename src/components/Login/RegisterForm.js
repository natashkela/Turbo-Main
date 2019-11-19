import classes from "../../containers/Login/Login.module.css";
import React from 'react';
import CheckboxContainer from '../FormComponents/CheckboxContainer/CheckboxContainer.js';
const RegisterForm = ()=> {
    let formElements = [
        {
            "name": "first_name",
            "type": "text",
            "placeholder": "First Name",
            required: true
        },
        {
            "name": "last_name",
            "type": "text",
            "placeholder": "Last Name",
            required: true
        },
        {
            "name": "dob",
            "type": "date",
            "placeholder": "Date of Birth",
            required: true
        },
        {
            "name": "email",
            "type": "email",
            "placeholder": "Email Address",
            required: true
        },
        {
            "name": "password",
            "type": "password",
            "placeholder": "Password",
            required: true
        },
        {
            "name": "confirm_password",
            "type": "password",
            "placeholder": "Confirm Password",
            required: true
        }
    ];
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className={`rq-registration-content-single small-bottom-margin ${classes.rqRegistrationContentSingle}`}>
                <div className="container-fluid">
                    <div className="rq-login-form no-border">
                        <div className="row display-flex-center">
                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
                                <h4>Don't have an account? Register now </h4>
                                <p>Lorem Ipsum has been the industry's standard </p>
                            </div>
                        </div>
                        <form className="form-horizontal">
                            <div className="width-100">
                                <div className="row display-flex-center">
                                    {formElements.map((element,index) =>
                                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8" key={'form_element+'+element.name}>
                                                <input type={element.type} className="rq-form-control"
                                                placeholder={element.placeholder} name={element.name}  required/>
                                            </div>
                                        )}
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
                                        <CheckboxContainer name='accept-terms' text='Accept Terms & Conditions'/>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
                                        <div className="register-button display-flex-center">
                                            <button type="submit" className="rq-btn rq-btn-primary border-radius width-100">Register <i className="arrow_right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RegisterForm;