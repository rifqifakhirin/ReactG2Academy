import React, { Component } from 'react';
import "./login.css"
import { Redirect } from "react-router-dom";
import { connect } from "react-redux"
import { setLoginAdmin } from "../../action"


class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };        
    }

    setValue = el => {
        console.log(el.value)
        console.log(el.name)
        this.setState({
            [el.name]: el.value
        })    
    }

    onLogin = (e) => {    
        e.preventDefault()
        console.log("onLogin");      
        const {username, password} = this.state
        if (username === "admin" && password === "admin") {
            this.props.loginStatusDinamic()
        } 
        else {
            alert("invalid username or password!!")
        }        
    }
    
    render() {
        if (this.props.loginStatus)
        return <Redirect to="/listcard"/>
        return (
            <div className="login">
                <h3>Please Login Here</h3>                
                <form>
                    <br />
                    <label>Username:</label>
                    <br />                    
                    <input
                    type="text" 
                    name="username" 
                    placeholder="username"
                    onChange={(el)=>this.setValue(el.target)}
                    />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input
                    type="password" 
                    name="password" 
                    placeholder="password"
                    onChange={(el)=>this.setValue(el.target)}
                    />
                    <br />
                    <br />
                    <button onClick={this.onLogin}>Login</button>
                    <br />
                    <br />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.auth.loginStat
})

const mapDispatchToProps = (dispatch) => ({
    loginStatusDinamic: () => dispatch(setLoginAdmin())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);