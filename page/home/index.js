import React, { Component } from 'react';
import "./home.css"
import { CardUnit } from "../../component/card"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="home">
                <CardUnit />                                                                                        
            </div>
        );
    }
}
 
export default Home;