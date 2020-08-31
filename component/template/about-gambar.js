import React, { Component } from 'react';
import "./about-gambar.css"
import Foto from "./foto.jpg"

class AboutGambar extends Component {    
    render() { 
        return (
            <img className="about-gambar" src={Foto} alt="foto-profil"></img>
        );
    }
}
 
export default AboutGambar;