import React,{Component} from 'react';
import Navbar from './Navbar.js';
import BreadcrumbTernary from './BreadcrumbTernary';
import ListYourCarTabContent from './ListYourCarTabContent';
import Footer from './Footer.js';
class ListYourCar extends Component{
  state = {
    isLoggedIn:false,
    customerInformation:{
      firstName: "Nata",
      lastName: "Vacheishvili",
      phone:"7742320539",
      phoneCountry:"us",
      id:1,
      username:"nvacheishvili"
    },
    hasACar:false,
    title: "List Your Car",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"List Your Car"
     }
   ],
   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet dolor vel ex aliquet tincidunt."
  }
  render(){
    return (
      <div className="list-your-car">
        <Navbar isLoggedIn={this.state.isLoggedIn} hasACar={this.state.hasACar}/>
        <BreadcrumbTernary breadcrumbs={this.state.breadcrumbs} title={this.state.title} description={this.state.description} />
        <ListYourCarTabContent customerInformation={this.state.customerInformation} isLoggedIn={this.state.isLoggedIn} />
        <Footer />
      </div>
    );
  }
}
export default ListYourCar;
