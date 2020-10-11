const initialState = {
    status: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGINADMIN":
            return {
                status: true
            }
        case "LOGOUT":
            return initialState
        default:
            return state
    }
}

export default authReducer