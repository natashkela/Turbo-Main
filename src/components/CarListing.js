import React,{Component} from 'react';
import FilterCarsBy from './FilterCarsBy.js';
import CarListViewType from './CarListViewType.js';
import Pagination from './Pagination.js';
class CarListing extends Component{
  state={
    list:[
      {
        brand:"BMW",
        model:"M6 Gran Coupe",
        stars:4,
        transmission:1,
        bodyStyle:"Sedan",
        price:39,
        id:1
      },
      {
        brand:"Ford",
        model:"Shelby GT500",
        stars:5,
        transmission:1,
        bodyStyle:"Sedan",
        price:29,
        id:2
      },
      {
        brand:"Mercedes-Benz",
        model:"C100",
        stars:3,
        transmission:0,
        bodyStyle:"Sedan",
        price:39,
        id:3
      },
      {
        brand:"BMW",
        model:"M6 Gran Coupe",
        stars:4,
        transmission:1,
        bodyStyle:"Sedan",
        price:39,
        id:4
      },
      {
        brand:"Ford",
        model:"Shelby GT500",
        stars:5,
        transmission:1,
        bodyStyle:"Sedan",
        price:29,
        id:5
      },
      {
        brand:"Mercedes-Benz",
        model:"C100",
        stars:3,
        transmission:0,
        bodyStyle:"Sedan",
        price:39,
        id:6
      },
      {
        brand:"BMW",
        model:"M6 Gran Coupe",
        stars:4,
        transmission:1,
        bodyStyle:"Sedan",
        price:39,
        id:7
      },
      {
        brand:"Ford",
        model:"Shelby GT500",
        stars:5,
        transmission:1,
        bodyStyle:"Sedan",
        price:29,
        id:8
      },
      {
        brand:"Mercedes-Benz",
        model:"C100",
        stars:3,
        transmission:0,
        bodyStyle:"Sedan",
        price:39,
        id:9
      },
      {
        brand:"BMW",
        model:"M6 Gran Coupe",
        stars:4,
        transmission:1,
        bodyStyle:"Sedan",
        price:39,
        id:10
      },
      {
        brand:"Ford",
        model:"Shelby GT500",
        stars:5,
        transmission:1,
        bodyStyle:"Sedan",
        price:29,
        id:11
      },
      {
        brand:"Mercedes-Benz",
        model:"C100",
        stars:3,
        transmission:0,
        bodyStyle:"Sedan",
        price:39,
        id:12
      }
    ],
    page:1,
    carPerPage:9,
    viewType:1
  }
  handleNextPage(currentPage){
    let total = this.getTotalPages();
    if(currentPage<=total){
      this.setState(prevState=>
        prevState.page++
      )
    }
  }
  handlePreviousPage(currentPage){
    if(currentPage>1){
      this.setState(prevState=>
        prevState.page--
      )
    }
  }
  getTotalPages(){
    return Math.ceil(this.state.list.length/this.state.carPerPage);
  }
  handleViewTypeChange(){
    this.setState(prevState=>
      prevState.viewType == 1 ? prevState.viewType=0 : prevState.viewType=1
    );
  }

  render(){
    return(
      <div>
        <FilterCarsBy viewType={this.state.viewType} viewTypeChange={this.handleViewTypeChange.bind(this)}/>
        <div className="rq-car-listing-wrapper">
          <CarListViewType list={this.state.list.slice((this.state.page-1)*this.state.carPerPage,(this.state.carPerPage*this.state.page))} viewType={this.state.viewType}/>
          <Pagination nextPage={this.handleNextPage.bind(this)} previousPage={this.handlePreviousPage.bind(this)} currentPage={this.state.page} total={this.getTotalPages()} />
        </div>
      </div>
    );
  }
}
export default CarListing;
