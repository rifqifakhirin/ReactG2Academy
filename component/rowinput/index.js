import React, { Component } from 'react';
import Input from "../input/index"

class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>                                 
                <Input 
                iniTypeNya={this.props.typeInput} 
                iniNameNya={this.props.nameInput}
                iniFnNya={this.props.fnSetValue}
                />                  
                
            </div>
        );
    }
}
 
export default RowInput;