import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';
import { Header, NavBar, Footer } from "./component/template"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
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