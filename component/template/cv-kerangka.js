import React, { Component } from 'react';
import Kiri from "./kiri-cv"
import Isi from "./isi-cv"
import Kanan from "./kanan-cv"
import "./cv-kerangka.css"

class Kerangka extends Component {    
    render() { 
        return (
            <div className="cv-kerangka">
                <Kiri />
                <Isi />
                <Kanan />                
            </div>
        );
    }
}
 
export default Kerangka;