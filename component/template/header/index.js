import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="header">
                <h2>Commuting App</h2>
                <p>We serve and give the actual information.</p>
                <p>Stay with Us.</p>
            </div>
        );
    }
}
 
export default Header;