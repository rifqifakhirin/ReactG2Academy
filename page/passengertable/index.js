import React, { Component } from 'react';
import "./passengertable.css"
import { connect } from "react-redux"

class PassengerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { dataPassenger } = this.props
        return (
            <div className="passengertable">
                <div><h2>List Passenger</h2></div>
                <div className="detail">
                    <ul>Detail:
                        <li>Bus Provider(Armada): a1, a2, a3, a4</li>
                        <li>Transit Code: t1(Puri Beta), t2(Swadarma), t3(Kebayoran Lama), t4(Rawa Barat), t5(Dukuh Atas)</li>
                    </ul>
                </div>
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
                                dataPassenger.map((val, idx) => {
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

export default connect(mapStateToProps)(PassengerTable);
