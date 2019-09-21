import React,{Component} from 'react';
import Navbar from './Navbar';
import BreadcrumbSecondary from './BreadcrumbSecondary';
import RegisterCheckout from './RegisterCheckout';
import BillingInformation from './BillingInformation';
import PaymentInformation from './PaymentInformation';
import OrderReview from './OrderReview';
import Footer from './Footer';
class Checkout extends Component {
  state = {
    title: "Checkout",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title: "Car Title Goes Here",
       href: "/car"
     },
     {
       title:"Checkout"
     }
   ],
   isLoggedIn:false,
   panels:[
     {
       name:"registerCheckout",
       isActive:true
     },
     {
       name:"billingInformation",
       isActive:false
     },
     {
       name:"orderReview",
       isActive:false
     },
     {
       name:"paymentInformation",
       isActive:false
     }
   ],
   reservedCarShortInfo:{
     id:1,
     brand:"BMW",
     model:"X5",
     year:"2016",
     author: "Nata Vacheishvili",
     startDate: "25/02/2018",
     endDate: "26/03/2018",
     totalCarPrice:150,
     totalCarDiscountedPrice:135,
     discountPercent:10,
     taxes:35,
     totalPrice:170
   }
 }
  handleActivePanel(panelIndex){
    this.setState(prevState=>{
      return prevState.panels.map((panel,index)=>
        index!==panelIndex ? panel.isActive = false : panel.isActive = true
      )
    });
  }
  render(){
    return (
      <div className="checkout">
        <Navbar />
            <div className="rq-page-content">
              <div className="rq-content-block">
                <div className="container">
                  <BreadcrumbSecondary title={this.state.title} breadcrumbs={this.state.breadcrumbs} />
                  <div className="rq-checkout-wrapper">
                    <div className="container">
                      <div className="row">
                        <div className="panel-group" id="checkout-accordion" role="tablist" aria-multiselectable="true">
                          {!this.state.isLoggedIn && <RegisterCheckout registerCheckout={this.state.panels[0].isActive} activePanel={this.handleActivePanel.bind(this)} index={0}/>}
                          <BillingInformation billingInformation={this.state.panels[1].isActive} index={1} activePanel={this.handleActivePanel.bind(this)} />
                          <OrderReview reservedCarShortInfo={this.state.reservedCarShortInfo} orderReview={this.state.panels[2].isActive} index={2} activePanel={this.handleActivePanel.bind(this)}/>
                          <PaymentInformation paymentInformation={this.state.panels[3].isActive} index={3} activePanel={this.handleActivePanel.bind(this)}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <Footer />
      </div>
    )
  }
}
export default Checkout;
