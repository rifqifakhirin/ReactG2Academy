import React, { Component } from 'react';
import { Provider } from "react-redux"
// import { createStore } from "redux"
import App from "./App"
// import AllReducers from "./reducer"
// import
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'

// const store = createStore(AllReducers)

class IndexApp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    render() { 
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        );
    }
}
 
export default IndexApp;