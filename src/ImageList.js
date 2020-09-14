import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

export default class ImageList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true,
        }
    }

    // cariData =(el)=>{
    //     console.log(el.name)
    //     // kataMasuk = 
    //     // getReg.filter((val) => {
    //     //     val.nama == Keyword
    //     // })
    // }
    
    render() {
        const { getReg } = this.props
        return(
            <View style={styles.container}>
                <View style={styles.container2}>
                <View style={styles.section}>
                    <View style={styles.teks}>
                        <Text>
                            Cari
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                        placeholder="Berdasarkan nama..."
                        name="nama"
                        onKeyPress={this.cariData}
                        style={styles.textInput} />
                    </View>
                </View>
                </View>
                {
                    getReg.map((val, idx) => {
                        return(
                            <View key={idx}
                            style={styles.container3}>
                                <View style={styles.containerleft}>
                                    <Image style={styles.img}
                                    source={{uri:`${val.url}`}}
                                    />
                                </View>
                                <View style={styles.containerright}>
                                    <Text>Nama:{val.nama}</Text>
                                    <Text style={styles.teks2}>Kode:{val.kode}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FEE9E4',
        marginTop: 30,
        
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:30
    },
    container3: {
        flex: 0.15,
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor:'white',
        width: '95%',
        paddingHorizontal:10,
        marginLeft:10,
        borderRadius:7,
        borderColor: '#EC6848',
        borderWidth:1
    },
    containerleft: {
        width: '25%'
    },
    containerright: {
        textAlign: 'left',
        paddingVertical: 15
    },
    section: {
        flexDirection: 'row',
        backgroundColor:'white',
        width: '100%',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:7,
    },
    teks: {
        borderRightWidth:1,
        borderRightColor:'gray',
        paddingRight:10,
        paddingTop: 15,
        width: '15%'
    },
    teks2: {
        marginTop: 10
    },
    input: {
        flex:1
    },
    img: {
        width: '80%',
        height: '100%'
    },

})