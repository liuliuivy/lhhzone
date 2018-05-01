import React, { Component } from 'react';
import Nav from './components/Nav';
import "./common/css/bootstrap.css";
import "./common/css/jquery.fancybox.css";
import "./common/css/style.css";
import logo from "./common/images/logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
      </div>
    );
  }
}

export default App;
