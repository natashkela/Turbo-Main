import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

//App Components
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Cars from './CarComponents/Cars/Cars';
import CarDetail from './CarComponents/CarDetail/CarDetail';
import Blog from './Blog/Blog';
import BlogPost from './Blog/BlogPost/BlogPost';
import Checkout from './Checkout/Checkout';
import Profile from './Profile/Profile';
import ListYourCar from './ListYourCar';
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
      <Route path="/profile" component={Profile} />
      <Route path="/list-your-car" component={ListYourCar} />
    </div>
  </BrowserRouter>
);

export default App;
