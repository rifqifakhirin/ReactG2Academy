import React, { Component } from 'react';
import "./register.css"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            name: "",
            quotes: "",
            github: "",
            username: "",
            password: ""
        }
    }

    setInput = e => {
        console.log(e.name)
        console.log(e.value)
        this.setState({
            [e.name]: e.value
        })
    }

    registerAct = e => {
        console.log("test3")
        const { image, name, quotes, github, username, password } = this.state

        this.props.setRegister({
            image, name, quotes, github, username, password
        })
    }

    render() { 
        return (
            <div className="register">
                <div className="form">
                    <h3>Registration Form</h3>
                    <label>Image:</label><br />
                    <input type="file" 
                    accept="image/*"
                    name="image"
                    onChange={(e) => this.setInput(e.target)}
                    ></input><br />
                    <label>Name:</label><br />
                    <input type="text" 
                    placeholder="full name"
                    name="name"
                    onChange={(e) => this.setInput(e.target)}
                    ></input><br />
                    <label>Quotes:</label><br />
                    <textarea type="text" 
                    placeholder="write here"
                    name="quotes"
                    onChange={(e) => this.setInput(e.target)}
                    ></textarea><br />
                    <label>Github link:</label><br />
                    <input  type="text" 
                    placeholder="link for account"
                    name="github"
                    onChange={(e) => this.setInput(e.target)}
                    ></input><br />
                    <label>Username:</label><br />
                    <input type="text"
                    placeholder="username"
                    name="username"
                    onChange={(e) => this.setInput(e.target)}
                    ></input><br />
                    <label>Password:</label><br />
                    <input type="password"
                    placeholder="password"
                    name="password"
                    onChange={(e) => this.setInput(e.target)}
                    ></input><br /><br />
                    <button onClick={this.registerAct}>Register</button><br /><br />
                </div>
            </div>
        );
    }
}
 
export default Register;