import React from 'react';
import PropTypes from 'prop-types';
import companyLogo from '../img/company-logo.png';
import NavbarItem from './Navbar-Item.js'
const Navbar = ({isLoggedIn,hasCar}) => {
  let nav ='{"main":[ { "mainMenuItem":{ "name":"Home", "href":"index.html" }, "dropdownMenuItems":{} }, { "mainMenuItem":{ "name":"Listing", "href":"car-listing-grid.html" }, "dropdownMenuItems":[ { "name":"Car listing grid", "href":"car-listing-grid.html" }, { "name":"Car listing list", "href":"car-listing-list.html" }, { "name":"ListingDetails", "href":"listing-detail.html" } ] }, { "mainMenuItem":{ "name":"Blog", "href":"blog-listing.html" }, "dropdownMenuItems":[ { "name":"Blog Listing", "href":"blog-listing.html" }, { "name":"Blog Post", "href":"post-single.html" } ] }, { "mainMenuItem":{ "name":"Page", "href":"#" }, "dropdownMenuItems":[ { "name":"About", "href":"about-us.html" }, { "name":"Contact Us", "href":"contact-us.html" }, { "name":"Checkout", "href":"checkout.html" }, { "name":"Shopping Cart", "href":"shopping-cart.html" }, { "name":"Registration", "href":"registration.html" } ] }]}';
  let navigationItems = JSON.parse(nav);
  return (
    <nav className="navbar navbar-default" id="sticker">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html"><img src={companyLogo} alt="" /></a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {Object.values(navigationItems["main"]).map((navItem,index)=>
              <NavbarItem key={index} mainMenuItem={navItem} />
            )}
            {isLoggedIn &&
                  <li>
                    <a href="list-car.php">List A Car</a>
                  </li>
                }
            {isLoggedIn &&
                  <li className="dropdown">
                    <a href="how-turbo-works.php" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                                                   aria-haspopup="true" aria-expanded="false">Learn More <span className="ion-chevron-down"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="how-turbo-works.php">How does Turbo work?</a></li>
                        <li><a href="rent-a-car.php">Rent Car</a></li>
                          <li><a href="make-money.php">Rent Out Car</a></li>
                    </ul>
                  </li>
                }
                {isLoggedIn &&
                  <li className="dropdown">
                    <a href="./my-profile.php" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                                       aria-haspopup="true" aria-expanded="false">My Profile<span className="ion-chevron-down"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="./my-profile.php">Profile</a></li>
                      {hasCar && <li><a href="./my-account.php">Listed Car</a></li> }
                      <li><a href="./history.php">History</a></li>
                      <li><a id="logout" href="#">Log Out</a></li>
                    </ul>
                  </li>
                }
            {!isLoggedIn &&
              <li className="login-register-link right-side-link"><a href="registration.html">
                <i className="icon_lock-open_alt"></i>Login</a>
              </li>
            }
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                         aria-haspopup="true" aria-expanded="false">ENG<span className="ion-chevron-down"></span></a>
              <ul className="dropdown-menu with-language">
                <li><a href="#">ENG</a></li>
                <li><a href="#">RUS</a></li>
                <li><a href="#">GEO</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool
}
export default Navbar;
