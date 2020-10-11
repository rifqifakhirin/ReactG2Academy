const initialState = {
    loginStat: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGINADMIN":
            return {
                loginStat: true,
            }
        case "LOGOUT":
            return initialState
        default:
            return state
    }
}

export default authReducer