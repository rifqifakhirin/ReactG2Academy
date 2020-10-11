import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom"
import { Login, Home, Edit, Register } from "../../../page"
import { HomeV2 } from "../../../page/homemember"
import "./navbar.css"
import MenuBar from '../menu';
import { connect } from "react-redux"

class NavBar extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            loginMember: false,     
            dataMasuk: [],
            loginStatus: this.props.statusLogin,
        }
    }

    dataDinamic = () => {        
        let dataChange = this.state.dataMasuk
        localStorage.setItem("dataMember", JSON.stringify(dataChange))
        this.setState({
            dataMasuk: JSON.parse(localStorage.getItem("dataMember"))
        })
    }
    


    getRegister = (objMember) => {        
        console.log("test2")
        let addMember = this.state.dataMasuk
        addMember.push(objMember)
        this.setState({
            dataMasuk: addMember
        })
        this.dataDinamic()
    }


    

    menuOption = () => {
        if (this.state.statusLogin) {
            
            return (
                <Link to="/login">
                        <MenuBar>Login</MenuBar>
                </Link> 
                              
            )
        }
        // else if (this.state.loginMember) {
        //     return (
        //         <div className="menumemberlogin">
        //             <Link to="/homev2">
        //                 <MenuBar>Home</MenuBar>
        //             </Link>
        //         </div>
        //     )
        // }
        return (
            <div className="menuafterlogin">
                    <Link to="/home">
                        <MenuBar>Home</MenuBar>
                    </Link>
                    <Link to="/edit">
                        <MenuBar>Edit</MenuBar>
                    </Link>
                    <Link to="/register">
                        <MenuBar>Register</MenuBar>
                    </Link>                               
            </div>
                       
        )
    }
    render() { 
        
        return (
            <>
                <div className="navbar">                 
                    {this.menuOption()}
                </div>

                <Switch>
                    <Route exact path="/login">
                        <Login 
                        loginStatus={this.props.statusLogin}
                        changeLoginMember={this.changeStatusMember}
                        />
                    </Route>
                    <Route exact path="/home">
                        <Home dataKeluar={this.state.dataMasuk}/>
                    </Route>
                    <Route path="/edit">
                        <Edit />
                    </Route>
                    <Route path="/register">
                        <Register 
                        setRegister={this.getRegister}
                        />
                    </Route>
                    <Route path="/homev2">
                        <HomeV2 />
                    </Route>                  
                </Switch>
            </>
        );
    }
}
 
const mapStateToProps = (state) => ({
    statusLogin: state.auth,
})

export default connect(mapStateToProps, null)(NavBar);