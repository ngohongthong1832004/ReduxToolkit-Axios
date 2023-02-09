import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : 0,
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        addNumber : (state, action) => {
            state.value++
        },
        subtractNumber : (state, action) => {
            console.log(action)
            state.value--
        }
    }
})

export const  count = state => state.counter.value

export const { addNumber, subtractNumber } = counterSlice.actions
export default counterSlice