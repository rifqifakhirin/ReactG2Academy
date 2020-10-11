import React, { Component } from 'react';
import "./homev2.css"
import { CardUnit } from "../../../component/card"

class HomeV2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="homev2">
                <CardUnit />                                                                                        
            </div>
        );
    }
}
 
export default HomeV2;