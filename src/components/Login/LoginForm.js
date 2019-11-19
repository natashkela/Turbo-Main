import classes from "../../containers/Login/Login.module.css";
import React from 'react';
import CheckboxContainer from '../FormComponents/CheckboxContainer/CheckboxContainer.js';
const LoginForm = () => {
    let formElements = [
        {
            "name": "Email",
            "type": "email",
            "placeholder": "Email",
            required: true
        },
        {
            "name": "password",
            "type": "password",
            "placeholder": "Password",
            required: true
        }
    ];
     return(
         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="rq-registration-content-single">
                <div className="container-fluid">
                    <h4>Login your account</h4>
                    <p>Login to your accounts to discover the great features in this template</p>
                    <div className={`rq-login-form ${classes.rqLoginForm}`}>
                        <form action="#">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
                                    {formElements.map((element,index) =>
                                        <div className="width-100" key={'form_element_'+element.name} >
                                            <input type={element.type} name={element.name} className="rq-form-control"
                                                   placeholder={element.placeholder} />
                                        </div>
                                    )}
                                    <div className="width-100">
                                        <button type="submit" className="rq-btn rq-btn-primary fluid border-radius">Login <i className="arrow_right"></i></button>
                                        <div className="font-12">By logging in, you are accepting <a href="#">Terms and Conditions</a></div>
                                    </div>
                                    <div className="width-100">
                                        <CheckboxContainer name='keep-me-logged-in' checkboxText='Keep me logged in'/>
                                        <div className="forgotpass">
                                            <a href="#">Forgot your password ?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="social-login">
                            <h5>or login with</h5>
                            <ul className="social-page-nav">
                                <li><a href="#" className="fb"><i className="social_facebook"></i></a></li>
                                <li><a href="#" className="gp"><i className="social_googleplus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
};
export default LoginForm;