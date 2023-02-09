import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : '',
    listValue : []
}


const addValue = createSlice({
    name : 'addValue',
    initialState,
    reducers : {
        addString : ( state, action) => {
            state = state.listValue.push(action.payload)
        },
        deleteValue : ( state, action ) => {
            console.log(state.listValue)
            console.log(state.listValue.slice(action.payload,1))
        
            state = state.listValue.splice(action.payload,1)
        }

    }
})




export default addValue
export  const { addString, deleteValue } = addValue.actions