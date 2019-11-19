import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

//App Components
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Cars from './containers/Cars/Cars/Cars';
import CarDetail from './containers/Cars/CarDetail/CarDetail';
import Blog from './containers/Blog/Blog';
import BlogPost from './containers/Blog/BlogPost/BlogPost';
import Checkout from './containers/Checkout/Checkout';
import Profile from './containers/Profile/Profile';
import ListYourCar from './containers/ListYourCar/ListYourCar';
import Login from './containers/Login/Login';
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
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

export default App;
