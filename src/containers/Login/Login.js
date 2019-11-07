import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import BreadcrumbSecondary from "../../components/Breadcrumbs/BreadcrumbSecondary";
import classes from './Login.module.css';
class Login extends Component{
    state = {
        isLoggedIn: false,
        title: "Login",
        breadcrumbs:    [
        {
            title: "Home",
            href: "/"
        },
        {
            title:"Login"
        }
        ]
    };
    render(){
        return (
            <div>
                <Navbar />
                <div className="rq-page-content">
                    <div className={`rq-content-block ${classes.rqContentBlock}`}>
                        <div className="margin-left-10">
                            <BreadcrumbSecondary title={this.state.title} breadcrumbs={this.state.breadcrumbs} noCenter={true}/>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="rq-registration-content-single">
                                    <div className="container-fluid">
                                        <h4>Login your account</h4>
                                        <p>Login to your accounts to discover the great features in this template</p>
                                        <div className={`rq-login-form ${classes.rqLoginForm}`}>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-6">
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                <input type="email" className="rq-form-control"
                                                                       placeholder="Your email" />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <input type="password" className="rq-form-control"
                                                                       placeholder="Your password"  />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <button type="submit"
                                                                        className="rq-btn rq-btn-primary fluid border-radius">Login <i className="arrow_right"></i></button>
                                                                <div className="font-12">By logging in, you are accepting <a href="#">Terms and Conditions</a></div>
                                                            </div>

                                                            <div className="col-md-12">
                                                                <div className="rq-checkbox">
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="remember-me">
                                                                    <span className="rq-checkbox">
                                                                      <input type="checkbox" id="remember-me" />
                                                                      <label htmlFor="remember-me">Keep me logged in</label>
                                                                    </span>
                                                                    <div className="forgotpass">
                                                                        <a href="#">Forgot your password ?</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="social-login">
                                                <h5>or login with</h5>
                                                <ul className="social-page-nav">
                                                    <li><a href="#" className="fb"><i className="social_facebook"></i></a>
                                                    </li>
                                                    <li><a href="#" className="gp"><i className="social_googleplus"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className={`rq-registration-content-single small-bottom-margin ${classes.rqRegistrationContentSingle}`}>
                                    <div className="container-fluid">
                                        <div className="rq-login-form no-border">
                                            <h4>Don't have an account! Register now </h4>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s</p>
                                            <form className="form-horizontal" action="#" method="post">
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                                <input type="text" className="rq-form-control"
                                                                       placeholder="First Name" required />
                                                            </div>
                                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                                <input type="text" className="rq-form-control"
                                                                       placeholder="Last Name" required />
                                                            </div>

                                                            <div className="col-md-12">
                                                                <input type="text" className="rq-form-control"
                                                                       placeholder="Middle Name" />
                                                            </div>

                                                            <div className="col-md-12">
                                                                <input type="date" className="rq-form-control"
                                                                       placeholder="Date of Birth" />
                                                            </div>

                                                            <div className="col-md-12">
                                                                <input type="email" className="rq-form-control"
                                                                       placeholder="Email Address" required />
                                                            </div>

                                                            <div className="col-md-12">
                                                                <input type="password" className="rq-form-control"
                                                                       placeholder="Password" required />
                                                            </div>

                                                            <div className="col-md-12">
                                                                <input type="password" className="rq-form-control"
                                                                       placeholder="Confirm Password" required />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="remember-me">
                                                                    <span className="rq-checkbox">
                                                                      <input type="checkbox" id="accept-terms" />
                                                                      <label htmlFor="accept-terms">Accept Terms & Conditions</label>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="register-button">
                                                                    <button type="submit"
                                                                            className="rq-btn rq-btn-primary border-radius">Register <i className="arrow_right"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>);
    }
}
export default Login;