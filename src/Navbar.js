import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css';
import './App.css';

class Nav extends Component {


    render() {
      return (
  
        <div className="Nav">
        
  
       
  
  <nav class="navbar fixed-top navbar-expand-lg  navbar navbar-dark bg-blue"  >
          <div class="logonav animated fadeInUp">
          <img src ="rompboy.png" width="32"/>
          </div>
          
          <a class="show navbar-brand animated fadeInUp" href="#">ROMPBOY  SHOES</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item activef ">
                <a class="show1 nav-link animated fadeInUp" href="#home" >Home<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="show2 nav-link animated fadeInUp"  href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="show3 nav-link animated fadeInUp" href="#collection" >Collection</a>
              </li>
              <li class="nav-item">
                <a class="show4 nav-link animated fadeInUp" href="#collab">Collab</a>
              </li>
              <li class="nav-item">
                <a class="show5 nav-link animated fadeInUp"  target ="_blank" href="https://www.facebook.com/rompboybkk/">Facebook</a>
              </li>
              
            </ul>
          </div>
        </nav>
  
        </div>
              );
              
          
              
            }
          }
          
          
          
          export default Nav;