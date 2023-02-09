import { configureStore } from "@reduxjs/toolkit";
import addValue from "../addValue/addValueSlice";
import counterSlice from "../counterSlice.js/counterSlice";

export const  store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        addValue : addValue.reducer,
    }
})