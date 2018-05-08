import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from './Carousel';
import Nav from './Navbar';
import About from './about';



class App extends Component {


  render() {
    return (

      <div className="App">

    
        <div class="bg">
          <Nav/>
          <Slide1/>
          <About/>
        </div>
        
        
        
    
      </div>
    );



  }
}



export default App;
