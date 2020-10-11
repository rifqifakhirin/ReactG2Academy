import React, { Component } from 'react';
import "./cardunit.css"
import gambar from "../../../assets/image/avatar.jpg"
import { Link } from "react-router-dom"
class CardUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { dataMasuk } = this.props
        return (
            <div className="cardunit">

                <div className="unitcard">
                                    <img src={gambar} alt="gambar" />
                                    <div className="container-card">
                                        <h4><b>Nama Lengkap</b></h4> 
                                        <p>quotes</p>
                                        <Link to="/https://www.wikipedia.org/">
                                        <button>Go to my Github</button>
                                        </Link>
                                    </div>
                </div>
                    {/* {
                        dataMasuk.map((val, idx) => {
                            return (
                                <div key={idx} className="unitcard">
                                    <img src={gambar} alt="gambar" />
                                    <div className="container-card">
                                        <h4><b>{val.name}</b></h4> 
                                        <p>{val.quotes}</p>
                                        <Link to="/https://www.wikipedia.org/">
                                        <button>Go to my Github</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    } */}
            </div>
        );
    }
}
 
export default CardUnit;