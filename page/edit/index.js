import React, { Component } from 'react';
import "./edit.css"
import { CardUnit } from "../../component/card"

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="edit">
                <CardUnit />                  
                <button>edit</button>
            </div>
        );
    }
}
 
export default Edit;