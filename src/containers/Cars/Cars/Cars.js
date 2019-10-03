import React,{Component} from 'react';
import Navbar from '../../../components/Navbar/Navbar.js';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb.js';
import Searchbox from '../../../components/Searchbox/Searchbox.js';
import CarListing from '../CarListing/CarListing.js';
import Footer from '../../../components/Footer/Footer.js';
class Cars extends Component{
  state ={
    title: "Car Listing",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"Car Listing"
     }
   ]
  }
  render(){
    return (
      <div className="cars">
        <Navbar />
        <Breadcrumb title={this.state.title} breadcrumbs={this.state.breadcrumbs} />
        <div className="rq-page-content">
        <div className="rq-content-block gray-bg small-padding-top">
          <div className="container">
            <div className="listing-search-container">
              <h2>Search For<span className="dot">.</span></h2>
              <Searchbox />
            </div>
            <CarListing />
          </div>
        </div>
        </div>
        <Footer />
      </div>
  );
  }
}
export default Cars;
