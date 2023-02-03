import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: JSON.parse(localStorage.getItem("user")) || null
    },
    reducers:{
        loginMethod: (state,action) => {
            localStorage.setItem("user", JSON.stringify(action.payload))
            state.user = action.payload
        },
        logoutMethod: (state) => {
            localStorage.removeItem("user")
            state.user = null
        }

    }
})

export const {loginMethod, logoutMethod} = authSlice.actions
export default authSlice.reducer