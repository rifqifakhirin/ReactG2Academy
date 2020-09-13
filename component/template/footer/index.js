import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="footer">
                Since September 2020. All right reserved.
            </div>
        );
    }
}
 
export default Footer;