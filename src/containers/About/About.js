import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb.js';
import AboutUsContentContainer from '../../components/About/AboutUsContentContainer';
import Footer from '../../components/Footer/Footer.js';
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
