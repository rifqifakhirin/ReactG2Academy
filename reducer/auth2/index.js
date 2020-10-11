const initialState = {
    dataMember: localStorage.getItem("dataMember") ? JSON.parse(localStorage.getItem("dataMember")) : []
}

const auth2Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDMBR":
            state.dataMember.push(action.mbr)
            localStorage.setItem("dataMember", JSON.stringify(state))
            console.log("Berhasil ditambahkan!")
            return state         
        default:
            return state    
    }
}

export default auth2Reducer