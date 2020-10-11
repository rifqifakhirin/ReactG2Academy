import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom"
import { Login, Listcard, Managecard } from "../../../page"
import "./navbar.css"
import MenuBar from '../menu';
import { connect } from "react-redux"
import { setLogout} from "../../../action"


class NavBar extends Component { 
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    logOut = () => {
        console.log("logout")
        this.props.logoutDinamic()
    }

    menuOption = () => {
        if (this.props.loginStatus) {
            return (
                <div className="menuafterlogin">
                    <Link to="/listcard">
                        <MenuBar>List Card</MenuBar>
                    </Link>
                    <Link to="/managecard">
                        <MenuBar>Manage Card</MenuBar>
                    </Link>
                    <Link to="/logout" onClick={this.logOut}>
                        <MenuBar>Logout</MenuBar>
                    </Link>           
                </div>                
            )
        }
        return (            
                <Link to="/">
                    <MenuBar>Login</MenuBar>
                </Link>                               
        )
    }
    render() { 
        
        return (
            <>
                <div className="navbar">                 
                    {this.menuOption()}
                </div>

                <Switch>
                    <Route exact path="/">                    
                        <Login />
                    </Route>
                    <Route exact path="/listcard">
                        <Listcard />
                    </Route>
                    <Route path="/managecard">
                        <Managecard />
                    </Route>
                    <Route path="/logout">
                        <Login />
                    </Route>
                </Switch>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.auth.loginStat,
})

const mapDispatchToProps = (dispatch) => ({
    logoutDinamic: () => dispatch(setLogout())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);