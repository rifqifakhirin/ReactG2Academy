import React, { Component } from 'react';
import "./menu.css"

class MenuBar extends Component {    
    render() { 
        return (
            <div className="menubar">{this.props.children}</div>
        );
    }
}
 
export default MenuBar;