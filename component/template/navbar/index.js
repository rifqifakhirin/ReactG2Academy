import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom"
import "./navbar.css"
import MenuBar from '../menu'
import { Login, HRD, Karyawan, InputDiv } from "../../page"


class NavBar extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            loginStat: false,
            empStat: false,
            dataKaryawan: [],
            dataDivisi: [],
            dataPosisi: [],
            dataAssign: []
        }
    }

    loginDinamic = () => {
        this.setState({
            loginStat: !this.state.loginStat
        })
    }

    empDinamic = () => {
        this.setState({
            empStat: !this.state.empStat
        })
    }

    adminLogout = () => {
        this.setState({
            loginStat: false,
            empStat: false
        })
    }

    logOut = () => {
        console.log("logout")
        this.adminLogout()
    }

    setRegister = (dataReg) => {
        let lastKaryawan = this.state.dataKaryawan
        lastKaryawan.push(dataReg)
        this.state({
            dataKaryawan: lastKaryawan
        })
        alert("data tersimpan!")
    }
    setDivisi = (divisi) => {
        let lastDivisi = this.state.dataDivisi
        lastDivisi.push(divisi)
        this.state({
            dataDivisi: lastDivisi
        })
        alert ("divisi tersimpan!")
    }
    setPosisi = (posisi) => {
        let lastPosisi = this.state.dataPosisi
        lastPosisi.push(posisi)
        this.state({
            dataPosisi: lastPosisi
        })
        alert ("posisi tersimpan!")
    }

    setAssign = (objEmp) => {
        let lastAssign = this.state.dataAssign
        lastAssign.push(objEmp)
        this.state ({
            dataAssign: lastAssign
        })
        alert ("Assignment berhasil dibuat!")
    }

    menuOption = () => {
        if (this.state.loginStat) {
            return (
                <div className="menuafterlogin">
                    <Link to="/hrd">
                        <MenuBar>List Employee</MenuBar>
                    </Link>
                    <Link to="/inputdiv">
                        <MenuBar>Input Divisi</MenuBar>
                    </Link>
                    <Link to="/logout" onClick={this.logOut}>
                        <MenuBar>Logout</MenuBar>
                    </Link>           
                </div>                
            )
        }
        else if (this.state.empStat) {
            return (
                <div className="menuafterlogin">
                    <Link to="/karyawan">
                        <MenuBar>Pendaftaran</MenuBar>
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
                        <Login 
                        adminStatus={this.state.loginStat}
                        empStatus={this.state.empStat}
                        loginStatusDinamic={this.loginDinamic}
                        empStatusDinamic={this.empDinamic} />
                    </Route>
                    <Route path="/hrd">
                        <HRD getRegister={this.state.dataKaryawan}
                        getDivisi={this.state.dataDivisi}
                        getPosisi={this.state.dataPosisi}
                        sendAssign={this.setAssign}/>
                    </Route>
                    <Route path="/karyawan">
                        <Karyawan addRegister={this.setRegister} />
                    </Route>
                    <Route path="/inputdiv">
                        <InputDiv getDivisi={this.state.dataDivisi}
                        getPosisi={this.state.dataPosisi}
                        sendDivisi={this.setDivisi}
                        sendPosisi={this.setPosisi}
                        />
                    </Route>
                    <Route path="/logout">
                        <Login />
                    </Route>
                </Switch>
            </>
        );
    }
}

export default NavBar;