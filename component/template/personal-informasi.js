import React, { Component } from 'react';
import "./personal-informasi.css"

class PersonalInformasi extends Component {    
    render() { 
        return (
            <div className="personal-informasi">
                <h2>PERSONAL INFORMATION</h2>              
                <h3>Date of Birth:</h3>
                <p>January 15th 1995</p>
                <h3>Gender:</h3>
                <p>Male</p>
                <h3>Address:</h3>
                <p>
                Masjid Al-Ikhlas Street No. 47, Cinangneng, Cihideung Udik, Ciampea,
                Bogor, West Java, Indonesia, Postal Code 16620
                </p>
                <h3>Phone:</h3>
                <p>+62-85781112495</p>
                <h3>E-mail:</h3>
                <p>rifqifakhirin@gmail.com</p>
            </div>
        );
    }
}
 
export default PersonalInformasi;