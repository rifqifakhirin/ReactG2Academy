import { combineReducers } from "redux"
import AuthReducer from "./auth"
import Auth2Reducer from "./auth2"

const AllReducers = combineReducers({
    auth: AuthReducer,
    auth2: Auth2Reducer
})

export default AllReducers