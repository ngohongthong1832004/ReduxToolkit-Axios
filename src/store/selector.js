import { createSelector } from "@reduxjs/toolkit"




export const counterState = (state) => state.counter.value
export const addValueState = (state) => state.addValue.listValue


export const iaAddValue = createSelector(
    counterState,
    addValueState,
    ( counter, addValue  ) => {
        if (counter %2 === 0 ){
            return addValue
        }else {
            return []
        }
    }
)