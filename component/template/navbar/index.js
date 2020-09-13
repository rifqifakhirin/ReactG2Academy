import React, { Component } from 'react';
import "./navbar.css"
import { Switch, Route, Link } from "react-router-dom"
import { BusRatio, CrowdedRate, PassengerTable,
StopRecommendation } from "../../../page"
import MenuBar from "../menu"


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: true
        }
    }

    menuOption =()=> {
        if (this.state.loginStatus) {
            return (
                <div className="menuafterlogin">
                    <Link to="/">
                        <MenuBar>Passenger Table</MenuBar>
                    </Link>
                    <Link to="/busratio">
                        <MenuBar>Bus Ratio</MenuBar>
                    </Link>
                    <Link to="/crowdedrate">
                        <MenuBar>Crowded Rate</MenuBar>
                    </Link>
                    <Link to="/stoprecommendation">
                        <MenuBar>Stop Recommendation</MenuBar>
                    </Link>                
                </div>
            )
        }
    }
    render() { 
        return (
            <>
                <div className="navbar">
                    {this.menuOption()}
                </div>
                <Switch>
                    <Route exact path="/">
                        <PassengerTable />
                    </Route>
                    <Route path="/busratio">
                        <BusRatio />
                    </Route>
                    <Route path="/crowdedrate">
                        <CrowdedRate />
                    </Route>
                    <Route path="/stoprecommendation">
                        <StopRecommendation />
                    </Route>              
                </Switch>
            </>
        );
    }
}
 
export default Navbar;