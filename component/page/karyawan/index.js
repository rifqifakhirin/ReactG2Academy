import React, { Component } from 'react';
import "./karyawan.css"

class Karyawan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            lahir: "",
            asal: "",
            email: "",
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

    regAct = () => {
        const { nama, lahir, asal, email, username, password } = this.state
        const dataReg = { nama, lahir, asal, email, username, password }
        this.props.addRegister(dataReg)
        console.log("data disimpan")
    }


    render() { 
        return (
            <div className="karyawan">
                <div>
                    <div><h2>Registrasi</h2></div>
                    <div>
                        <div><label>Nama: </label></div>
                        <div>
                            <input
                            type="text"
                            name="nama"
                            placeholder="nama"
                            onChange={(el) =>this.setValue(el.target)}></input>
                        </div>
                        <div><label>Tanggal lahir: </label></div>
                        <div>
                            <input
                            type="date"
                            name="lahir"
                            placeholder="tanggal lahir"
                            onChange={(el) =>this.setValue(el.target)}></input>
                        </div>
                        <div><label>Asal: </label></div>
                        <div>
                            <input
                            type="text"
                            name="asal"
                            placeholder="asal"
                            onChange={(el) =>this.setValue(el.target)}></input>
                        </div>
                        <div><label>Email: </label></div>
                        <div>
                            <input
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={(el) =>this.setValue(el.target)}></input>
                        </div>
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
                        <div><button onClick={this.regAct}>Masuk</button></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Karyawan;