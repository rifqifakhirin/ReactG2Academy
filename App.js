import React, { Component } from 'react';
import {Kerangka, Kiri, Isi, Kanan} from "./component/template"

class App extends Component {  
  render() { 
    return (      
      <Kerangka>
        <Kiri />
        <Isi />
        <Kanan />
      </Kerangka>
    );
  }
}
 
export default App;

