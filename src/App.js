import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    StatusBar,
    // Dimensions,
    // TouchableOpacity
} from "react-native";
import Login from "./Login";
import Home from "./Home"

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            status: false
        }
    }

    setStatus=()=>{
        this.setState({
            status: !this.state.status
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                {this.state.status ?
                <Home sendStatus={this.setStatus}/>
                :
                <Login sendStatus={this.setStatus}/>}
            </View>
        )
    }
}

// const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
    container: {
        flex:1,
    }
})