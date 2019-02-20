import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from'./components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
