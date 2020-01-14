import React, { Component } from 'react';
import Router from './Router/Router.component'
import Navigation from './components/Navagation.component'

class App extends Component {
 

  render() {
    return (
      
      <div>
        <Navigation />
        <Router />
      </div>
      
    );
  }
}



export default App;