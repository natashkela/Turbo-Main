import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Breadcrumb from './Breadcrumb.js';
import AboutUsContentContainer from './AboutUsContentContainer';
import Footer from './Footer.js';
class About extends Component {
  state={
     title: "About Us",
     breadcrumbs: [
      {
        title: "Home",
        href: "/"
      },
      {
        title:"About Us"
      }
    ]
  }
  render() {
    return (
      <div className="about-us">
        <Navbar />
        <Breadcrumb title={this.state.title} breadcrumbs={this.state.breadcrumbs}/>
        <AboutUsContentContainer />
        <Footer />
      </div>
    );
  }
}

export default About;
