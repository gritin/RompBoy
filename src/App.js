import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';
import Slide1 from './Carousel';
import Nav from './Navbar';
import About from './about';
import Rompboy from './rompboy';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './home';
import Collection from './collection';
import Slidecol from './colslide';


class App extends Component {


  render() {
    return (

      <div className="App" id="page-wrap">



        <div class="bg ">
        <Nav/>
          
          
          <div class="bg animated animated fadeInDownBig ">
         
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/collection" component={Collection} />
        </div>
     
      

          
        </div>
       
      </div>
    );



  }
}



export default App;
