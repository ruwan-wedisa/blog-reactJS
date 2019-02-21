import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from'./components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Posts from './components/Posts'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
  
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Route path='/:postid' component={Posts}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
