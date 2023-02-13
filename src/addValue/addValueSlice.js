import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status : 'idle',
  value: "",
  listValue: [],
};

const addValue = createSlice({
  name: "addValue",
  initialState,
  reducers: {
    addString: (state, action) => {
      state = state.listValue.push(action.payload);
    },
    deleteValue: (state, action) => {
      console.log(state.listValue);
      console.log(state.listValue.slice(action.payload, 1));

      state = state.listValue.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(delayShowListItem.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(delayShowListItem.fulfilled, (state, action) => {
        console.log(action.payload)
        state.listValue.push(action.payload)
      });
  },
});

export const delayList = (data) => {
    return function addItemThunk( dispatch, getState) {
        console.log(getState())
        setTimeout(()=>{
            dispatch(addValue.actions.addString(data))
        },5000)
    }
}

export const delayShowListItem = createAsyncThunk("'prefix'", async (data) => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await res.json()
    // return data
    // return(dispatch,getState) => {
    //     console.log("getState" , getState)
    // }
    // console.log('data',data)
    //     setTimeout(() => {
    //     },5000)
    let rs
    console.log('truoc')
    const timer = await setTimeout(()=>{
        return timer
     },50000)
     console.log('sau')
     return timer
    // return function addItemThunk( dispatch, getState) {
    //     console.log(getState())
    //     setTimeout(()=>{
    //         return(data)
    //     },5000)
    // }
});

export default addValue;
export const { addString, deleteValue } = addValue.actions;
