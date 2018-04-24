import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
//import {Link, Switch, Route} from "react-router-dom";
import Homepage from './containers/Homepage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
