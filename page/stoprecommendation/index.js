import React, { Component } from 'react';
import "./stoprecommendation.css"
import { connect } from "react-redux"

class StopRecommendation extends Component {
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
            <div className="stoprecommendation">
                <div><h2>Halte Recommendation</h2></div>
                <div>We recommend you go to the halte which less than 61%</div>
                <ul className="detail">(Max: 10 Person)
                    <li>Puri Beta: {ratio1} % Crowded</li>
                    <li>Swadarma: {ratio2} % Crowded</li>
                    <li>Kebayoran Lama: {ratio3} % Crowded</li>
                    <li>Rawa Barat: {ratio4} % Crowded</li>
                    <li>Dukuh Atas: {ratio5} % Crowded</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dataPassenger: state.auth.dataPassenger
})

export default connect(mapStateToProps)(StopRecommendation);