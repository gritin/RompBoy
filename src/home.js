import React, { Component } from 'react';
import About from './about';
import Slide1 from './Carousel';
import Rompboy from './rompboy';
import SlideCol from './slidecol';
class Home extends Component{

    render() {
        return (
    
          <div className="Home">

          <Slide1/>
        
          <About/>
          
          <SlideCol/>
          <Slide1/>
          <Slide1/>
          <Slide1/>
            
        
          </div>
        );
    
    
    
      }
}

export default Home;