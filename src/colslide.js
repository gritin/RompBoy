import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Slidecol extends Component {


  render() {
    return (

      <div className="Sllidecol" id="collection">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2700" >
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100 img-banner" src="cover1.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 img-banner" src="cover5.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 img-banner" src="cover3.jpg" alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 img-banner" src="cover6.jpg" alt="Forth slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 img-banner" src="cover7.jpg" alt="Fifth slide" />
            </div>

          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <p>
            <button class="btn  carousel-indicators " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <img width="43px" src="down.png" />
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class='container'>
              <div class="aboutbg">
                <div class="card-deck">
                  <div class="card">
                    <img class="card-img-top" src="white.jpg" alt="Card image cap" />
                 
                  </div>
                  <div class="card">
                    <img class="card-img-top" src="brick.jpg " alt="Card image cap" />
                   </div> 
                  <div class="card">
                    <img class="card-img-top" src="green.jpg " alt="Card image cap" />
                  </div>
                  <div class="card">
                    <img class="card-img-top" src="white.jpg" alt="Card image cap" />
                   </div> 
                  


                </div>

              </div>


            </div>
          </div>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </div>
    );



  }
}



export default Slidecol;
