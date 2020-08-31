import React, { Component } from 'react';
import PersonalInformasi from "./personal-informasi"
import PersonalKualifikasi from "./personal-kualifikasi"
import "./personal-kerangka.css"

class Personal extends Component {    
    render() { 
        return (
            <div className="personal-kerangka">
                <PersonalInformasi />
                <PersonalKualifikasi />
            </div>
        );
    }
}
 
export default Personal;