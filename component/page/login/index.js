import React, { Component } from 'react';
import "./login.css"
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStat: false,
            empStat: false,
            username: "",
            password: ""
        }
    }

    setValue = (el) => {
        console.log(el.value)
        console.log(el.name)
        this.setState({
            [el.name]: el.value
        })   
    }

    loginAct = () => {
        const {username, password} = this.state
        if (username === "admin" && password === "admin") {
            this.props.loginStatusDinamic()
        }
        else if (username === "emp1" && password === "emp1") {
            this.props.empStatusDinamic()
        }
        else {
            alert ("username/password invalid!!")
        }

    }

    render() { 
        if (this.props.adminStatus)
        return <Redirect to="/hrd"/>
        if (this.props.empStatus)
        return <Redirect to="/karyawan"/>
        return (
            <div className="login">
                <div>
                    <div><h2>Silahkan Login</h2></div>
                    <div>
                        <div><label>Username: </label></div>
                        <div>
                            <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={(el) =>this.setValue(el.target)}></input>
                        </div>
                        <div><label>Password: </label></div>
                        <div>
                            <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={(el) =>this.setValue(el.target)}></input>
                        </div>
                        <div><button onClick={this.loginAct}>Masuk</button></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;