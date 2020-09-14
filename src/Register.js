import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";

export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true
        }
    }

    regData =()=>{
        let objReg = {
            kode: this.Kode,
            nama: this.Nama,
            url: this.Url
        }
        console.log(objReg)
        this.props.sendReg(objReg)
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.teks}>
                        <Text>
                            Kode
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                        placeholder="kode"
                        name="kode"
                        onChangeText={(text) => this.Kode = text}
                        style={styles.textInput} />
                    </View>
                </View>
                <View style={[styles.section,{
                    marginTop:15}]}>
                    <View style={styles.teks}>
                        <Text>
                            Nama
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                        placeholder="nama"
                        name="nama"
                        onChangeText={(text) => this.Nama = text}
                        style={styles.textInput} />
                    </View>
                </View>
                <View style={[styles.section,{
                    marginTop:15}]}>
                    <View style={styles.teks}>
                        <Text>
                            URL
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                        placeholder="url"
                        name="url"
                        onChangeText={(text) => this.Url = text}
                        style={styles.textInput} />
                    </View>
                </View>
                <View style={{marginTop:15}
                    }>
                    <Button color= '#EC6848'
                    title="Tambah"
                    onPress={this.regData}/>
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
        paddingTop: 10
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
        paddingTop: 15,
        width: '15%'
    },
    input: {
        flex:1
    },
    textInput: {
        paddingLeft:10
    },
})