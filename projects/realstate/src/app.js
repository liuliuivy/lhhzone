import React, { Component } from 'react';
import Nav from './components/Nav';
import MostPopular from './components/MostPopular';
import Slide from './components/Slide';
import SmartDetails from './components/SmartDetails';
import "./common/css/bootstrap.css";
import "./common/css/jquery.fancybox.css";
import "./common/css/style.css";
import logo from "./common/images/logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        
        <Slide/>
        <MostPopular/>
      </div>
    );
  }
}

export default App;
