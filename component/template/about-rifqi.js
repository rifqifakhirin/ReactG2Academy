import React, { Component } from 'react';
import AboutGambar from "./about-gambar"
import AboutTeks from "./about-teks"
import "./about-rifqi.css"

class AboutRifqi extends Component {    
    render() { 
        return (
            <div className="about-rifqi">
                <AboutGambar />
                <AboutTeks />
            </div>
        );
    }
}
 
export default AboutRifqi;