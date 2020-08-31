import React, { Component } from 'react';
import PengalamanKerja from "./pengalaman-kerja"
import StudyTraining from "./studi-training"
import "./personal-kualifikasi.css"

class PersonalKualifikasi extends Component {    
    render() { 
        return (
            <div className="personal-kualifikasi">
                <h2>PERSONAL QUALIFICATION</h2>
                <PengalamanKerja />
                <StudyTraining />                               
            </div>
        );
    }
}
 
export default PersonalKualifikasi;