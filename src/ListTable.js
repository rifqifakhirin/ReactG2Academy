import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

export default class ListTable extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true,
            newData: []
        }
    }
    deleteAct =(idx)=> {
        let newData = this.state.newData
        let dataDelete = this.props.getReg;
        dataDelete.splice(idx,1);
        this.setState({
            newData: dataDelete
        })
        this.props.updateData(newData)
    }
    
    render() {
        const { getReg } = this.props
        return(
            <View style={styles.container}>
                <View><Text style={styles.teks1}>List Registrasi</Text></View>
                <View style={styles.head}>
                    <View style={styles.th}>
                        <Text style={styles.teks2}>Kode</Text></View>
                    <View style={styles.th}>
                        <Text style={styles.teks2}>Nama</Text></View>
                    <View style={styles.th}>
                        <Text style={styles.teks2}>Delete</Text></View>
                    <View style={styles.th}>
                        <Text style={styles.teks2}>Edit</Text></View>
                </View>
                <View style={styles.body}>
                    {
                        getReg.map((val, idx) => {
                            return(
                                <View key={idx} style={styles.tr}>
                                    <View style={styles.td}>
                                        <Text style={styles.teks2}>{val.kode}</Text>
                                    </View>
                                    <View style={styles.td}>
                                        <Text style={styles.teks2}>{val.nama}</Text>
                                    </View>
                                    <View style={styles.td}>
                                        <View style={styles.bt}>
                                        <Button title="delete"
                                        color='#EC6848'
                                        onPress={()=>this.deleteAct(idx)}
                                        ></Button>
                                        </View>
                                    </View>
                                    <View style={styles.td}>
                                        <View style={styles.bt}>
                                        <Button title="edit"
                                        color='#EC6848'
                                        // onPress={this.editAct(idx)}
                                        ></Button>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }                    
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:0.5,
        backgroundColor: '#FEE9E4',
        marginTop: 30
    },
    teks1: {
        textAlign: 'center'
    },
    head: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 20,
        height: 40
    },
    th: {
        width: '25%'
    },
    teks2: {
        textAlign: 'center',
        paddingTop: 10
    },
    tr: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 20,
        height: 40,
        marginTop: 0,
        paddingBottom: 10
    },
    td: {
        width: '25%',
        justifyContent:'center',
        alignItems:'center'
        
    },
    bt: {
        width:'70%'
    }
})