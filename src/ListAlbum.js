import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from "react-native"
import AsyncStorage from '@react-native-community/async-storage'
import ListAlbumIsi from "./ListAlbumIsi";
import ListAlbumIsi2 from "./ListAlbumIsi2";
import ListAlbumIsi3 from "./ListAlbumIsi3";
import ListAlbumIsi4 from "./ListAlbumIsi4";
import ListAlbumIsi5 from "./ListAlbumIsi5";
import ListAlbumIsi6 from "./ListAlbumIsi6";
import ListAlbumIsi7 from "./ListAlbumIsi7";
import ListAlbumIsi8 from "./ListAlbumIsi8";
import ListAlbumIsi9 from "./ListAlbumIsi9";
import ListAlbumIsi10 from "./ListAlbumIsi10";





export default class ListAlbum extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true,
            data: [],
            page1: true,
            page2: false,
            page3: false,
            page4: false,
            page5: false,
            page6: false,
            page7: false,
            page8: false,
            page9: false,
            page10: false
        }
    } 

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/albums', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              data: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
    }
    
    // getData = async () => {
    //     try {
    //       const data = await AsyncStorage.getItem('dataAlbum')
    //       return data != null 
    //       ? 
    //       JSON.parse(data) 
    //       : 
    //       fetch('https://jsonplaceholder.typicode.com/albums', {
    //         method: 'GET'
    //         })
    //         .then((response) => response.json())
    //         .then((data) => {
    //         console.log("data");
    //         this.setState({
    //             data: data
    //         })
    //         })
    //         // .then((data) => {
    //         // await AsyncStorage.setItem('dataAlbum', JSON.stringify(data))
    //         // })
            
    //     } 
    //     catch(e) {
    //       // error reading value
    //     }
    // }
    // const storeData = async (value) => {
    //     try {
    //       const jsonValue = JSON.stringify(value)
    //       await AsyncStorage.setItem('@storage_Key', jsonValue)
    //     } catch (e) {
    //       // saving error
    //     }
    //   }
    // setData = async(data) => {
    //     try {
    //         const data = await AsyncStorage.getItem('dataAlbum')
    //         return data != null 
    //         ? 
    //         JSON.parse(data) 
    //         :
    //         // const jsonValue = JSON.stringify(value)
    //         await AsyncStorage.setItem('dataAlbum', JSON.stringify(data))

    //     } catch {

    //     }
    // }

    touch(value){
        if(value=="1"){
            this.setState({
                page1: true,
                page2: false,
                page3: false,
                page4: false,
                page5: false,
                page6: false,
                page7: false,
                page8: false,
                page9: false,
                page10: false
            })
        }
        else if(value=="2"){
            this.setState({
                page1: false,
                page2: true,
                page3: false,
                page4: false,
                page5: false,
                page6: false,
                page7: false,
                page8: false,
                page9: false,
                page10: false
            })
        }
        else if (value=="3"){
            this.setState({
                page1: false,
                page2: false,
                page3: true,
                page4: false,
                page5: false,
                page6: false,
                page7: false,
                page8: false,
                page9: false,
                page10: false
            })
        }
        else if (value=="4"){
            this.setState({
                page1: false,
                page2: false,
                page3: false,
                page4: true,
                page5: false,
                page6: false,
                page7: false,
                page8: false,
                page9: false,
                page10: false
            })
        }
        else if (value=="5"){
            this.setState({
                page1: false,
                page2: false,
                page3: false,
                page4: false,
                page5: true,
                page6: false,
                page7: false,
                page8: false,
                page9: false,
                page10: false
            })
        }
        else if (value=="6"){
            this.setState({
                page1: false,
                page2: false,
                page3: false,
                page4: false,
                page5: false,
                page6: true,
                page7: false,
                page8: false,
                page9: false,
                page10: false
            })
        }
        else if (value=="7"){
            this.setState({
                page1: false,
                page2: false,
                page3: false,
                page4: false,
                page5: false,
                page6: false,
                page7: true,
                page8: false,
                page9: false,
                page10: false
            })
        }
        else if (value=="8"){
            this.setState({
                page1: false,
                page2: false,
                page3: false,
                page4: false,
                page5: false,
                page6: false,
                page7: false,
                page8: true,
                page9: false,
                page10: false
            })
        }
        else if (value=="9"){
            this.setState({
                page1: false,
                page2: false,
                page3: false,
                page4: false,
                page5: false,
                page6: false,
                page7: false,
                page8: false,
                page9: true,
                page10: false
            })
        }
        else if (value=="10"){
            this.setState({
                page1: false,
                page2: false,
                page3: false,
                page4: false,
                page5: false,
                page6: false,
                page7: false,
                page8: false,
                page9: false,
                page10: true
            })
        }
        else {
            return
        }
    }

    gantiMenu =()=>{
        if(this.state.page1) {
            return (
                <ListAlbumIsi getData={this.state.data}/>
            )
        }            
        else if(this.state.page2) {
            return (
                <ListAlbumIsi2 getData={this.state.data}/>
            )
        }
        else if(this.state.page3) {
            return (
                <ListAlbumIsi3 getData={this.state.data}/>
            )
        }
        else if(this.state.page4) {
            return (
                <ListAlbumIsi4 getData={this.state.data}/>
            )
        }
        else if(this.state.page5) {
            return (
                <ListAlbumIsi5 getData={this.state.data}/>
            )
        }
        else if(this.state.page6) {
            return (
                <ListAlbumIsi6 getData={this.state.data}/>
            )
        }
        else if(this.state.page7) {
            return (
                <ListAlbumIsi7 getData={this.state.data}/>
            )
        }
        else if(this.state.page8) {
            return (
                <ListAlbumIsi8 getData={this.state.data}/>
            )
        }
        else if(this.state.page9) {
            return (
                <ListAlbumIsi9 getData={this.state.data}/>
            )
        }
        else if(this.state.page10) {
            return (
                <ListAlbumIsi10 getData={this.state.data}/>
            )
        }    
    }
    render(){
        console.log(this.state)
        // { this.getData() }
        // { this.setData() }
        return(
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.tabbar}>
                        <View style={styles.box}>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("1")}
                            >1</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("2")}
                            >2</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("3")}
                            >3</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("4")}
                            >4</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("5")}
                            >5</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("6")}
                            >6</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch(7)}
                            >7</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("8")}
                            >8</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("9")}
                            >9</Text>
                            <Text style={styles.teks}
                            onPress={()=>this.touch("10")}
                            >10</Text>
                        </View>
                    </View>
                    {
                        this.gantiMenu()
                    }
            </View>
            
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginTop: 30,
        backgroundColor: '#FEE9E4'
    },
    tabbar: {
        width: '100%',
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