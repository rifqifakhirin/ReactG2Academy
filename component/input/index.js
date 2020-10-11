import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <input 
            type={this.props.iniTypeNya} 
            name={this.props.iniNameNya}             
            onChange={(el) => this.props.iniFnNya(el.target)}>
               
            </input>
        );
    }
}
 
export default Input;