import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css';
import './App.css';

class Nav extends Component {


    render() {
      return (
  
        <div className="Nav">
  
       
  
  <nav class="navbar fixed-top navbar-expand-lg  navbar navbar-dark bg-dark"  >
          <img src ="rompboy.png" width="2.25%"/>
          
          <a class="navbar-brand" href="#">ROMPBOY  SHOES</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item activef ">
                <Link exact to="/" class="nav-link">Home<span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#a1" >About</a>
              </li>
              <li class="nav-item">
                <Link to="/collection"class="nav-link" >Collection</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Limited</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Contact
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Address</a>
                  <a class="dropdown-item" href="#">Line</a>
                  <a class="dropdown-item" target ="_blank" href= " https://www.facebook.com/rompboybkk/">Facebook</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
  
        </div>
              );
              
          
              
            }
          }
          
          
          
          export default Nav;