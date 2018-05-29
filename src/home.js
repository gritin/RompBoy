import React, { Component } from 'react';
import Nav from './Navbar';
import About from './about';
import Slide1 from './Carousel';
import Rompboy from './rompboy';
import Slidecol from './colslide';
import Collabsl from './collabsl';


class Home extends Component{

    render() {
        return (

          <div className="Home animated animated fadeInDownBig " id="home">
          
        <div class="block1">
          <Slide1/>
          </div>
         
         
          <div class="aos-animate"data-aos="fade-up"data-aos-duration="3000">
          <About/>
          </div>
          
          <Slidecol/>
          <Collabsl/>
         
         
            
        
          </div>
        );
    
    
    
      }
}

export default Home;