import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native'

class ListAlbumIsi3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked:true
        }
    }
    
    render() { 
        const { getData } = this.props
        const dataAlbum3 = getData.filter((data) => data.userId === 3)
        return (
            <ScrollView>
                <StatusBar hidden={true} />
                <View style={styles.container}>
                {
                    dataAlbum3.map((val, idx) => {
                        return(
                            <View key={idx}
                            style={styles.container3}
                            >
                                <View 
                                style={styles.containerleft}
                                >
                                    <Image 
                                    style={styles.img}
                                    source={{uri:"https://ecs7.tokopedia.net/img/cache/700/product-1/2017/4/30/1651147/1651147_57dd4e3e-181b-4a11-9c44-977e38ee8083"}}
                                    />
                                </View>
                                <View 
                                style={styles.containerright}
                                >
                                    <Text>Id:{val.id}</Text>
                                    <Text 
                                    // style={styles.teks2}
                                    >Title:{val.title}</Text>
                                </View>
                            </View>
                        )
                    })
                }
                </View>                
            </ScrollView>
        );
    }
} 
export default ListAlbumIsi3;

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container3: {
        flex: 0.2,
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
        paddingVertical: 10
    },
    img: {
        width: '80%',
        height: '100%'
    },
    // teks2: {
    //     marginTop: 10
    // }
})