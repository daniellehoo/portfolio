import React, { Component } from 'react';
import './App.css';
import {  Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <Header />
              <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/' component={Home}/>
                <Redirect to='/' />
              </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
