import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image
} from "react-native"
import ImageList from "./ImageList";
import ListTable from "./ListTable";
import Register from "./Register";
import ListAlbum from "./ListAlbum"

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
          menu1: true,
          menu2: false,
          menu3: false,
          menu4: false,
          dataReg: []
        }
    }
    touch(value){
        if(value=="Register"){
            this.setState({
                menu1: true,
                menu2: false,
                menu3: false,
                menu4: false
            })
        }
        else if(value=="ListTable"){
            this.setState({
                menu1: false,
                menu2: true,
                menu3: false,
                menu4: false
            })
        }
        else if (value=="ImageList"){
            this.setState({
                menu1: false,
                menu2: false,
                menu3: true,
                menu4: false
            })
        }
        else if (value=="ListAlbum"){
            this.setState({
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: true
            })
        }
        else {
            this.props.sendStatus()
        }
    }

    setReg = (objReg) => {
        let lastReg = this.state.dataReg
        lastReg.push(objReg)
        this.setState({
            dataReg: lastReg
        })        
        alert("Registrasi Berhasil!")
    }

    changeData = (newData) => {
        this.setState({
            dataReg: newData
        })
        alert("Data diperbarui!")
    }

    gantiMenu =()=>{
        if(this.state.menu1) {
            return (
                <Register sendReg={this.setReg}/>
            )
        }            
        else if(this.state.menu2) {
            return (
                <ListTable getReg={this.state.dataReg}
                updateData={this.changeData}/>
            )
        }            
        else if(this.state.menu3) {
            return (                
                <ImageList getReg={this.state.dataReg}/>
            )            
        }
        else if(this.state.menu4) {
            return (                
                <ListAlbum />
            )            
        }             
    }
    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.header}>
                    <View style={styles.background}>
                        <Image
                        source={require("./assets/logo7.jpg")}
                        style={{width:'100%',
                        height: '100%'}}
                        resizeMode={"stretch"} 
                        />
                    </View>
                    <View style={styles.tabbar}>
                        <View style={styles.box}>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("Register")}
                            >Register</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("ListTable")}
                            >List Table</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("ImageList")}
                            >Image List</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("ListAlbum")}
                            >List Album</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("Logout")}
                            >Logout</Text>
                        </View>
                    </View>
                </View>
                {this.gantiMenu()}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FEE9E4'
    },
    header: {
        flex: 0.1,
        backgroundColor: 'white'
    },
    tabbar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '90%',
        height: 40,
        borderRadius: 30,
        elevation: 10,
        backgroundColor:'#EC6848',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth:1,
        borderColor: '#EC6848',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity:0.7,
        shadowRadius: 2.62,
        flexDirection: 'row'
    },
    teks: {
        color: 'white'
    }
})