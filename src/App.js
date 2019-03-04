import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Details from './components/Details';
import Page404 from './components/Page404';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Products  } />
          <Route path="/details" component={ Details  } />
          <Route path="/cart" component={ Cart  } />
          <Route component={ Page404  } />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
