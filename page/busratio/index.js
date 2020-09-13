import React, { Component } from 'react'
import "./busratio.css"
import { connect } from "react-redux"

class BusRatio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {        
        const {dataPassenger} = this.props
        const dataPassengerIn1 = dataPassenger.filter((data) => data.tap_type === "tap-in" && data.provider_id === "a1")
        const dataPassengerIn2 = dataPassenger.filter((data) => data.tap_type === "tap-in" && data.provider_id === "a2")
        const dataPassengerIn3 = dataPassenger.filter((data) => data.tap_type === "tap-in" && data.provider_id === "a3")
        const dataPassengerIn4 = dataPassenger.filter((data) => data.tap_type === "tap-in" && data.provider_id === "a4")
        let ratio1 = (dataPassengerIn1.length/10)*100
        let ratio2 = (dataPassengerIn2.length/10)*100
        let ratio3 = (dataPassengerIn3.length/10)*100
        let ratio4 = (dataPassengerIn4.length/10)*100
        return (
            <div className="busratio">
                <div><h2> Bus Ratio</h2></div>
                <ul className="detail">(Max: 10 Person)
                    <li>Bus a1: Seat {ratio1} % Occupied</li>
                    <li>Bus a2: Seat {ratio2} % Occupied</li>
                    <li>Bus a3: Seat {ratio3} % Occupied</li>
                    <li>Bus a4: Seat {ratio4} % Occupied</li>
                </ul>
                <div><h3> Bus a1</h3></div>
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
                <div><h3> Bus a2</h3></div>
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
                <div><h3> Bus a3</h3></div>
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
                <div><h3> Bus a4</h3></div>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dataPassenger: state.auth.dataPassenger
})

export default connect(mapStateToProps)(BusRatio);
