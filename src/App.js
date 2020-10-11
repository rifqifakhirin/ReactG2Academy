import React, { Component } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Home from "./Home"
import { connect } from "react-redux"



const Stack = createStackNavigator();

class App extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    // setStatus=()=>{
    //     this.setState({
    //         status: !this.state.status
    //     })
    // }
    
    render() {
        return (
            <NavigationContainer>
                <StatusBar hidden={true} />
                <Stack.Navigator>
                    {
                        // this.state.status ?
                        this.props.loginStatus ?
                        <Stack.Screen 
                            name="Home"
                            children={(props) =>
                            <Home {...props} 
                            // sendStatus={this.setStatus} 
                            />}
                        />
                        :                        
                        <Stack.Screen 
                            name="Login"
                            children={(props) =>
                            <Login {...props} 
                            // sendStatus={this.setStatus} 
                            />}
                        />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

const mapStateToProps = (state) => ({
    loginStatus: state.auth.status
})

export default connect(mapStateToProps, null)(App);