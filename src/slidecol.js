import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SlideCol extends Component {


    render() {
      return (
  
        <div className="SlideCol">
  
       
  
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 img-banner" src="white.jpg" alt="First slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-banner" src="brick.jpg" alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-banner" src="green.jpg" alt="Third slide" />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  
        </div>
              );
              
          
              
            }
          }
          
          
          
          export default SlideCol;
  