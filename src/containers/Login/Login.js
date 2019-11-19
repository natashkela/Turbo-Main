import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import RegisterForm from '../../components/Login/RegisterForm';
import LoginForm from '../../components/Login/LoginForm';
import Footer from '../../components/Footer/Footer.js';
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
                        <div className="row">
                            <RegisterForm />
                            <LoginForm />
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        );
    }
}
export default Login;