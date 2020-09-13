import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Header, NavBar, Footer } from "./component/template"
import "./App.css"

class App extends Component {  
  render() { 
    return (
      <div className="App">
        <Router>
          <Header />
          <NavBar />
          <Footer />
        </Router>
      </div>
    );
  }
}
 
export default App;
