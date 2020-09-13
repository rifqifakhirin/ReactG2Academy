const initialState = {
    dataPassenger: 
    localStorage.getItem("dataPassenger") ?
    JSON.parse(localStorage.getItem("dataPassenger")) :
    [
        {
            id:"123a",
            provider_id:"a1",
            transit_id:"t1",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123b",
            provider_id:"a2",
            transit_id:"t1",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"123c",
            provider_id:"a1",
            transit_id:"t3",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123d",
            provider_id:"a3",
            transit_id:"t2",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"123e",
            provider_id:"a2",
            transit_id:"t1",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123f",
            provider_id:"a1",
            transit_id:"t1",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123g",
            provider_id:"a3",
            transit_id:"t4",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123h",
            provider_id:"a1",
            transit_id:"t4",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123i",
            provider_id:"a2",
            transit_id:"t5",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123j",
            provider_id:"a2",
            transit_id:"t2",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"123k",
            provider_id:"a3",
            transit_id:"t3",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123l",
            provider_id:"a3",
            transit_id:"t3",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123m",
            provider_id:"a1",
            transit_id:"t4",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123n",
            provider_id:"a2",
            transit_id:"t5",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123o",
            provider_id:"a2",
            transit_id:"t2",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123p",
            provider_id:"a1",
            transit_id:"t4",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123q",
            provider_id:"a2",
            transit_id:"t3",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"123r",
            provider_id:"a3",
            transit_id:"t2",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123s",
            provider_id:"a3",
            transit_id:"t2",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123t",
            provider_id:"a3",
            transit_id:"t2",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123u",
            provider_id:"a3",
            transit_id:"t2",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123v",
            provider_id:"a3",
            transit_id:"t4",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"123w",
            provider_id:"a2",
            transit_id:"t3",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"123x",
            provider_id:"a2",
            transit_id:"t1",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"123y",
            provider_id:"a2",
            transit_id:"t1",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"123z",
            provider_id:"a4",
            transit_id:"t1",
            tap_type:"tap-in",
            created_at: 1
        },
        {
            id:"234a",
            provider_id:"a4",
            transit_id:"t5",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"234b",
            provider_id:"a4",
            transit_id:"t4",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"234c",
            provider_id:"a3",
            transit_id:"t2",
            tap_type:"tap-out",
            created_at: 1
        },
        {
            id:"234d",
            provider_id:"a4",
            transit_id:"t1",
            tap_type:"tap-out",
            created_at: 1
        }
    ]
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDPASSENGER":
            state.dataPassenger.push(action.psg)
            localStorage.setItem("dataPassenger", JSON.stringify(state))
            console.log("Berhasil ditambahkan!")
            return state
        default:
            return state
    }
}

export default authReducer