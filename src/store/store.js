import AsyncStorage from '@react-native-community/async-storage'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import AllReducers from '../reducer/index'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: [ 'authReducer',]
}

const persistedReducer = persistReducer(persistConfig, AllReducers)

const store = createStore (
    persistedReducer,
    // applyMiddleware(createLogger(),),    
)

let persistor = persistStore (store)

export { store, persistor}