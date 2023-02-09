import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterSlice.js/counterSlice";

export const  store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        testStore : counterSlice.reducer,
    }
})