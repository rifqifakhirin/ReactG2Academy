import React, { Component } from 'react';
import PenyanggaAtas from "./penyangga-atas"
import AboutRifqi from "./about-rifqi"
import Personal from "./personal-kerangka"
import "./isi-cv.css"

class Isi extends Component {    
    render() { 
        return (
            <div className="isi-cv">
                <PenyanggaAtas />
                <AboutRifqi />
                <Personal />
            </div>
        );
    }
}
 
export default Isi;