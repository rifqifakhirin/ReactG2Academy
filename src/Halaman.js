import React, { Component } from 'react';
import {
    View,
    Text,
} from "react-native"

class Halaman extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // console.log("constructor")
    }
    // componentWillUnmount() {
    //     console.log("unmount")
    // }
    // UNSAFE_componentWillReceiveProps() {
    //     console.log("receive props")
    // }
    // shouldComponentUpdate() {
    //     console.log("should update?")
    //     return true
    // }
    // UNSAFE_componentWillUpdate() {
    //     console.log("will update")
    // }
    // componentDidUpdate() {
    //     console.log("did update")
    // }
    // UNSAFE_componentWillMount() {
    //     console.log(" will mount")
    // }
    // tambahData=()=>{
    //     console.log("tambah data")
    //     this.setState({
    //         status: !this.state.status
    //     })
    // }
    // dataMuncul=()=>{
    //     if (this.state.status) {
    //         return(
    //             <Text>Muncul nih</Text>
    //         )
    //     }
    // }
    render() {
        // console.log("render") 
        return (
            <View>
                <Text>Tes</Text>
                {/* <Button
                title="muncul"
                onPress={this.tambahData}
                ></Button>
                { this.dataMuncul() } */}
            </View>
        );
    }
}
 
export default Halaman;