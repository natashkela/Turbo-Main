import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb.js';
import ContactUs from '../../components/Contact/ContactUsContainer.js';
import Footer from '../../components/Footer/Footer.js';
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
