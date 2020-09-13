import React, { Component } from 'react';
import "./crowdedrate.css"
import { connect } from "react-redux"

class CrowdedRate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {dataPassenger} = this.props
        const dataPassengerIn1 = dataPassenger.filter((data) => data.transit_id === "t1")
        const dataPassengerIn2 = dataPassenger.filter((data) =>  data.transit_id === "t2")
        const dataPassengerIn3 = dataPassenger.filter((data) =>  data.transit_id === "t3")
        const dataPassengerIn4 = dataPassenger.filter((data) =>  data.transit_id === "t4")
        const dataPassengerIn5 = dataPassenger.filter((data) =>  data.transit_id === "t5")
        let ratio1 = (dataPassengerIn1.length/10)*100
        let ratio2 = (dataPassengerIn2.length/10)*100
        let ratio3 = (dataPassengerIn3.length/10)*100
        let ratio4 = (dataPassengerIn4.length/10)*100
        let ratio5 = (dataPassengerIn5.length/10)*100
        return (
            <div className="crowdedrate">
                <div><h2>Crowded Rate</h2></div>
                <div>Category (Uncrowded: Less than 31%, Crowded: Less than 61%, Very Crowded: More than 61%)</div>
                <ul className="detail">(Max: 10 Person)
                    <li>Puri Beta: {ratio1} % Crowded</li>
                    <li>Swadarma: {ratio2} % Crowded</li>
                    <li>Kebayoran Lama: {ratio3} % Crowded</li>
                    <li>Rawa Barat: {ratio4} % Crowded</li>
                    <li>Dukuh Atas: {ratio5} % Crowded</li>
                </ul>
                <div><h3>Halte Puri Beta</h3></div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID Passenger</th>
                                <th>Bus Provider</th>
                                <th>Transit</th>
                                <th>Tap Type</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataPassengerIn1.map((val, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{val.id}</td>
                                            <td>{val.provider_id}</td>
                                            <td>{val.transit_id}</td>
                                            <td>{val.tap_type}</td>
                                            <td>{val.created_at}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div><h3>Halte Swadarma</h3></div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID Passenger</th>
                                <th>Bus Provider</th>
                                <th>Transit</th>
                                <th>Tap Type</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataPassengerIn2.map((val, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{val.id}</td>
                                            <td>{val.provider_id}</td>
                                            <td>{val.transit_id}</td>
                                            <td>{val.tap_type}</td>
                                            <td>{val.created_at}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div><h3>Halte Kebayoran Lama</h3></div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID Passenger</th>
                                <th>Bus Provider</th>
                                <th>Transit</th>
                                <th>Tap Type</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataPassengerIn3.map((val, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{val.id}</td>
                                            <td>{val.provider_id}</td>
                                            <td>{val.transit_id}</td>
                                            <td>{val.tap_type}</td>
                                            <td>{val.created_at}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div><h3>Halte Rawa Barat</h3></div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID Passenger</th>
                                <th>Bus Provider</th>
                                <th>Transit</th>
                                <th>Tap Type</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataPassengerIn4.map((val, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{val.id}</td>
                                            <td>{val.provider_id}</td>
                                            <td>{val.transit_id}</td>
                                            <td>{val.tap_type}</td>
                                            <td>{val.created_at}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div><h3>Halte Dukuh Atas</h3></div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID Passenger</th>
                                <th>Bus Provider</th>
                                <th>Transit</th>
                                <th>Tap Type</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataPassengerIn5.map((val, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{val.id}</td>
                                            <td>{val.provider_id}</td>
                                            <td>{val.transit_id}</td>
                                            <td>{val.tap_type}</td>
                                            <td>{val.created_at}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dataPassenger: state.auth.dataPassenger
})

export default connect(mapStateToProps)(CrowdedRate);