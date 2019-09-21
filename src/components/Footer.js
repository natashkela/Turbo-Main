import React from 'react';
import FooterNavigationColumns from './FooterNavigationColumns.js';
import companyLogo from '../img/company-logo.png';
const Footer = () => {
  let list = [
    [
      {
        name: "Site Map",
        href: "#"
      },
      {
        name: "Terms & Conditions",
        href: "#"
      },
      {
        name: "Privacy Policy",
        href: "#"
      },
      {
        name: "Help",
        href: "#"
      },
      {
        name: "Affiliate",
        href: "#"
      }
    ],
    [
      {
        name: "Our Location",
        href: "#"
      },
      {
        name: "Career",
        href: "#"
      },
      {
        name: "About Us",
        href: "#"
      },
      {
        name: "Contact Us",
        href: "#"
      }
    ],
    [
      {
        name: "FAQs",
        href: "#"
      },
      {
        name: "Blog",
        href: "#"
      },
      {
        name: "Car Blog",
        href: "#"
      },
      {
        name: "Location",
        href: "#"
      },
      {
        name: "Press",
        href: "#"
      }
    ]
  ];
  return (
    <footer className="rq-footer">
      <div className="rq-main-footer">
        <div className="container">
          <button className="toggle-widget">Footer widget</button>
          <div className="footer-widget">
              <FooterNavigationColumns list={list} />
            </div>
          </div>
        </div>

      <div className="rq-copyright-section">
        <div className="container">
          <div className="copyright-content">
            <p><a href="#"><img src={companyLogo} alt="" /></a> © 2018 <a href="#">Turbo, Inc</a>.</p>
            <ul className="list-unstyled social-list">
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-rss"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
