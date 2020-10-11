import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    PermissionsAndroid
} from "react-native";
import RNFetchBlob from 'rn-fetch-blob'

export default class ImageList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true,
        }
    }

    checkPermission = async () => {
        if (Platform.OS === 'ios') {
            downloadImage(idx)
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message: 'This app needs access to your storage to download Photos',
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Storage Permission Granted')
                    downloadImage(idx)
                } else {
                    alert ('Storage Permission Not Granted')
                }
            } 
            catch (err) {
                console.warn(err)
            }
        }
    }

    downloadImage = (idx) => {
        let dataDownload = this.props.getReg
        let date = new Date()
        let image_URL = idx
        let ext = getExtention(image_URL)
        ext = '.' + ext[0]
        const { config, fs } = RNFetchBlob
        let PictureDir = fs.dirs.PictureDir
        let options = {
            fileChace: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/image_' + Math.floor(date.getTime() +
                    dataDownload.getSeconds() /2) + ext,
                    description: 'Image',
            }
        }
        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                console.log('res ->', JSON.stringify(res))
                alert('Image Download Succesfully')
            })
    }

    getExtention = filename => {
        return /[.]/.exec(filename) ?
        /[^.]+$/.exec(filename) :
        undefined
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
                                <View style={styles.containermid}>
                                    <Text style={styles.teks2}>Nama: {val.nama}</Text>
                                    <Text style={styles.teks2}>Kode: {val.kode}</Text>
                                </View>
                                <View style={styles.containerright}>
                                    <TouchableOpacity style={styles.button}
                                    onPress={this.checkPermission(`${val.url}`)}
                                    >
                                        <Text style={styles.teks3}>Download Image</Text>
                                    </TouchableOpacity>
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
    containermid: {
        width: '50%',
        textAlign: 'left',
        paddingVertical: 15
    },
    containerright: {
        width: '25%'
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
        marginTop: 0,
        paddingVertical: 0
    },
    input: {
        flex:1
    },
    img: {
        width: '80%',
        height: '100%'
    },
    button: {
        backgroundColor: '#EC6848',
        borderColor: '#EC6848',
        borderWidth:1,
        width: '80%',
        marginTop: 10,
        paddingVertical: 2,
        paddingHorizontal: 2
    },
    teks3: {
        color: 'white',
        textAlign: 'center'
    }

})