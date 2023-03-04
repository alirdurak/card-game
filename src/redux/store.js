import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cardSlice from "./card-slice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        cards: cardSlice

    }
}) 
export default store