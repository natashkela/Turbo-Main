import React,{Component} from 'react';
import TabCarListNavigation from './TabCarListNavigation.js';
import TabAvailableCarsBrief from './TabAvailableCarsBrief.js';
class CarListingTabContainer extends Component {
  state = {
     list :[
      {
        name: "Top Popular",
        isActive: true,
        cars:[
          {
            title: "Lamborghini Aventado 2012",
            description: "Four Seater Car",
            price: 39.00,
            luggage_space:2,
            smoking_allowed:0,
            kilomeeters: 30,
            isActive: true
          },
          {
            title: "Ford Red Sport Car",
            description: "Four Seater Car",
            price: 29.00,
            luggage_space:3,
            smoking_allowed:0,
            kilomeeters: 36,
            isActive: false
          },
          {
            title: "Kia Rio White Car 2016",
            description: "Four Seater Car",
            price: 27.00,
            luggage_space:3,
            smoking_allowed:1,
            kilomeeters: 30,
            isActive: false
          },
          {
            title: "Kia Rio White Car 2016",
            description: "Four Seater Car",
            price: 27.00,
            luggage_space:3,
            smoking_allowed:0,
            kilomeeters: 40,
            isActive: false
          },
          {
            title: "Kia Rio White Car 2016",
            description: "Four Seater Car",
            price: 27.00,
            luggage_space:2,
            smoking_allowed:1,
            kilomeeters: 35,
            isActive: false
          }
        ]
      },
      {
            name: "New Cars",
            isActive: false,
            cars:[
              {
              title: "Ford Red Sport Car",
              description: "Four Seater Car",
              price: 29.00,
              luggage_space:3,
              smoking_allowed:0,
              kilomeeters: 36,
              isActive: true
            },
              {
                title: "Kia Rio White Car 2016",
                description: "Four Seater Car",
                price: 27.00,
                luggage_space:3,
                smoking_allowed:1,
                kilomeeters: 30,
                isActive: false
              },
              {
                title: "Kia Rio White Car 2016",
                description: "Four Seater Car",
                price: 27.00,
                luggage_space:3,
                smoking_allowed:0,
                kilomeeters: 40,
                isActive: false
              },
              {
                title: "Kia Rio White Car 2016",
                description: "Four Seater Car",
                price: 27.00,
                luggage_space:2,
                smoking_allowed:1,
                kilomeeters: 35,
                isActive: false
              }
            ]
      },
      {
            name: "Sale Off",
            isActive: false,
            cars:[
              {
                title: "Lamborghini Aventado 2012",
                description: "Four Seater Car",
                price: 39.00,
                luggage_space:2,
                smoking_allowed:0,
                kilomeeters: 30,
                isActive: true
              },
              {
                title: "Ford Red Sport Car",
                description: "Four Seater Car",
                price: 29.00,
                luggage_space:3,
                smoking_allowed:0,
                kilomeeters: 36,
                isActive: false
              },
              {
                title: "Kia Rio White Car 2016",
                description: "Four Seater Car",
                price: 27.00,
                luggage_space:3,
                smoking_allowed:1,
                kilomeeters: 30,
                isActive: false
              },
            ]
      }
    ]
  }
  handleTabCarListNavigationClick = (index) => {
    this.setState(prevState=>{
        prevState.list.map((tab, tabIndex)=>{
          if(tabIndex!==index){
            tab.isActive=false
          }
          else{
            tab.isActive=true
          }
        })
    });
  }
  handleTabAvailableCarsBriefClick = (tabIndex,carIndex) => {
    let TabList = this.state.list;
    TabList.map((tab, index)=>{
        if(index==tabIndex){
            TabList[index]['cars'].map((car, indexCar)=>{
              if(indexCar!==carIndex){
                car.isActive=false
              }
              else{
                car.isActive=true
                console.log(car);
              }
            });
        }
      })
    this.setState(TabList);
  }
  render(){
    return (
    <div className="rq-content-block with-border-bottom vertical-line">
      <div className="rq-car-listing-tab">
        <TabCarListNavigation tabToggle={this.handleTabCarListNavigationClick} list={this.state.list}/>
        <div className="tab-content">
          {this.state.list.map((tabCarList,index)=>
              <TabAvailableCarsBrief list={tabCarList['cars']} count={index} carActiveToggle={this.handleTabAvailableCarsBriefClick} isActive={tabCarList['isActive']} id={"car-tab"+index} key={index}/>
          )}
        </div>
      </div>
    </div>
  )
  }
}
export default CarListingTabContainer;
