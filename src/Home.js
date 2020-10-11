import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Image,
    Button
} from "react-native"
// import { createDrawerNavigator, DrawerContentScrollView, 
//     DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ImageList from "./ImageList";
import ListTable from "./ListTable";
import Register from "./Register";
import ListAlbum from "./ListAlbum";
import { connect } from "react-redux"
import { setLogout } from "./action"
// import Halaman from "./Halaman";

// const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          dataReg: []
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
    changeStatus = () => {
        this.props.updateStatus()
    }
    render() {
        return (
            // <Drawer.Navigator
            //          drawerContent={props => {
            //             return (
            //                 <DrawerContentScrollView {...props}>
            //                     <DrawerItemList {...props} />
            //                     <DrawerItem label="logout"
            //                     onPress={()=>                                
            //                         this.props.sendStatus()}
            //                     />
            //                 </DrawerContentScrollView>
            //             )    
            //         }}
            //     >
            //         <Drawer.Screen name="Halaman"
            //             child={(props) =>
            //             <Halaman {...props}
            //             />}
            //         />          
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
                </View>
                <View style={{marginTop:15}
                    }>
                    <Button color= '#EC6848'
                    title="Logout"
                    onPress={this.changeStatus}/>
                </View>
                <Tab.Navigator>
                    <Tab.Screen name="Register" 
                        children={(props) =>
                        <Register {...props} 
                        sendReg={this.setReg} 
                        />} 
                    />
                    <Tab.Screen name="List Table" 
                        children={(props) =>
                        <ListTable {...props} 
                        getReg={this.state.dataReg}
                        updateData={this.changeData} 
                        />}
                    />
                    <Tab.Screen name="Image List" 
                        children={(props) =>
                        <ImageList {...props} 
                        getReg={this.state.dataReg} 
                        />}  
                    />
                    <Tab.Screen name="List Album" 
                        children={(props) =>
                        <ListAlbum {...props} 
                        />}  
                    />
                </Tab.Navigator>
            </View>
            // </Drawer.Navigator>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FEE9E4'
    },
    header: {
        flex: 0.2,
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

const mapDispatchToProps = (dispatch) => ({
    updateStatus: () => dispatch(setLogout())
})

export default connect(null, mapDispatchToProps)(Home);