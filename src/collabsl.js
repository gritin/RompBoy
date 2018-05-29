import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Collabsl extends Component {


    render() {
      return (

        <div className="Collabsl " id="collab">
          <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel"data-interval="4000">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
      
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100  img-banner" src="01.1-01.png" alt="First slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-banner" src="02.png" alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-banner" src="03.png" alt="Third slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-banner" src="04..png" alt="Forth slide" />
      </div>
      
     
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    <p>
            <button class="btn  carousel-indicators " type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
              <img width="43px" src="down.png" />
            </button>
          </p>
          <div class="collapse " id="collapseExample2">
          <img class="img-banner2 " src="1c.png" />
          <img class="img-banner2 " src="2c.png" />
          <img class="img-banner2 " src="3c.png" />
          <img class="img-banner2 " src="4c.png" />
          </div>
  </div>

  
        </div>
              );
              
          
              
            }
          }
          
          
          
          export default Collabsl;
  