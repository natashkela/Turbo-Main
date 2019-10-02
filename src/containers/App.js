import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

//App Components
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Cars from '../components/CarComponents/Cars/Cars';
import CarDetail from '../components/CarComponents/CarDetail/CarDetail';
import Blog from '../components/Blog/Blog';
import BlogPost from '../components/Blog/BlogPost/BlogPost';
import Checkout from '../components/Checkout/Checkout';
import Profile from '../components/Profile/Profile';
import ListYourCar from '../components/ListYourCar/ListYourCar';
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/cars" component={Cars} />
      <Route path="/car-detail" component={CarDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog-post" component={BlogPost} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/list-your-car" component={ListYourCar} />
      <Route path="/profile" component={Profile} />
    </div>
  </BrowserRouter>
);

export default App;
