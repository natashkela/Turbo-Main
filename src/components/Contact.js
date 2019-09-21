import React, {Component} from 'react';
import Navbar from './Navbar.js';
import Breadcrumb from './Breadcrumb.js';
import ContactUs from './ContactUsContainer.js';
import Footer from './Footer.js';
class Contact extends Component{
  state ={
    title: "Contact Us",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"Contact Us"
     }
   ]
  }
  render(){
    return (
      <div className="contact-us">
        <Navbar />
        <Breadcrumb title={this.state.title} breadcrumbs={this.state.breadcrumbs} />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default Contact;
