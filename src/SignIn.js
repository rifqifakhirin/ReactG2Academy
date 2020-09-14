import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native"

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true
        }
    }

    cekInput =()=>{
        console.log(this.userName)
        console.log(this.Password)
        if (this.userName === "admin" && this.Password === "admin") {
            this.props.getStatus()
        }
        else {
            alert("invalid username or password!")
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.teks}>
                        <Text>
                            Username
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                        placeholder="username"
                        name="username"
                        onChangeText={(text) => this.userName = text}
                        style={styles.textInput} />
                    </View>
                </View>
                <View style={[styles.section,{
                    marginTop:15
                }]}>
                    <View style={styles.teks}>
                        <Text>
                            Password
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                        secureTextEntry
                        placeholder="password"
                        onChangeText={(text) => this.Password = text}
                        style={styles.textInput} />
                    </View>
                </View>
                <View style={styles.button_container}>
                    <View style={styles.button}>
                        <Text style={styles.text}
                        onPress={this.cekInput}>
                            Login
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:30,
        paddingTop: 60
    },
    section: {
        flexDirection: 'row',
        backgroundColor:'white',
        width: '100%',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:7
    },
    teks: {
        borderRightWidth:1,
        borderRightColor:'gray',
        paddingRight:10,
        paddingTop: 15
    },
    input: {
        flex:1
    },
    textInput: {
        paddingLeft:10
    },
    button_container: {
        flex:1,
        alignItems: 'flex-end'
    },
    button: {
        width:100,
        height:40,
        backgroundColor: '#EC6848',
        borderWidth:1,
        borderColor:'white',
        borderRadius:7,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:18
    }
})