import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image
} from "react-native"
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
          enable: true
        }
    }
    tab(value){
        if(value=="LogIn"){
          this.setState({
            enable:true
          })
        }
        else{
          this.setState({
            enable:false
          })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image 
                            source={require("./assets/logo.png")}
                            style={{width: '100%', 
                            height: '95%',
                            borderBottomLeftRadius:220,
                            borderBottomRightRadius:220
                            }}
                            resizeMode={"stretch"}
                        />
                    </View>
                    <View style={styles.tabbar}>
                        <View style={styles.box}
                        >
                            <Text style={styles.teks1}
                            onPress={()=>this.tab("LogIn")}>
                                Login
                            </Text>
                            <Text style={styles.teks2}
                            onPress={()=>this.tab("SignUp")}>
                                Sign Up
                            </Text>
                        </View>
                    </View>
                </View>
                {this.state.enable ?
                <SignIn getStatus={this.props.sendStatus}/>
                :
                <SignUp />}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#EC6848'
    },
    header: {
        flex: 1.5,
        paddingHorizontal:15
    },
    logo: {
        flex:1,
        width: '100%',
        height: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width:0,
            height:2,
        },
        shadowOpacity:1,
        shadowRadius:2.62,
        elevation:4,
        borderBottomLeftRadius:200,
        borderBottomRightRadius:200    
    },
    tabbar: {
        position: 'absolute',
        bottom:0,
        width:'100%',
        height:40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '50%',
        height:70,
        borderRadius: 50,
        elevation:10,
        backgroundColor: '#EC6848',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        borderColor: '#EC6848',
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height:2
        },
        shadowOpacity:0.7,
        shadowRadius:2.62,
        flexDirection: 'row',
        marginLeft: 20
                
    },
    teks1: {
        color: 'white',
        marginRight: 20, 
    },
    teks2: {
        color: 'white',
        borderColor:'white'  
    }
})