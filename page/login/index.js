import React, { Component } from 'react';
import "./login.css"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { setLogin } from "../../action"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    setValue = el => {
        console.log(el.name)
        console.log(el.value)
        this.setState({            
            [el.name]: el.value
        })
    } 

    loginAct = (e) => {
        e.preventDefault()
        console.log("test")
        const {username, password} = this.state
        const { dataMasuk } = this.props
        if (username === "admin" && password === "admin") {
            return this.props.changeLoginStat()            
        }         
        else if (dataMasuk.username === username && dataMasuk.password === password ) {
            return this.props.changeLoginMember()
        }    
        else {
            alert("invalid username or password!!")
        }
        
    } 


    render() { 
        if (this.props.loginStatus)
        return <Redirect to="/home"/>
        return (
            <div className="login">
                <form>
                    <h3>Login Form</h3>
                    <label>Username:</label><br />
                    <input type="text" 
                    placeholder="username"
                    name="username"
                    onChange={(el) => this.setValue(el.target)}
                    ></input><br />
                    <label>Password:</label><br />
                    <input type="password" 
                    placeholder="password"
                    name="password"
                    onChange={(el) => this.setValue(el.target)}
                    ></input><br /><br />
                    <button
                    onClick={this.loginAct}>Login</button><br /><br />
                </form>
            </div>
        );
    }
}
 

const mapDispatchToProps = (dispatch) => ({
    changeLoginStat: () => dispatch(setLogin())
})

export default connect(null, mapDispatchToProps)(Login);