import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase/create-user";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: auth.currentUser
    },
    reducers:{

    }
})

// export const {} = authSlice.actions
export default authSlice.reducer