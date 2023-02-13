import { createSelector } from "@reduxjs/toolkit"



export const statusState = (state) => state.addValue.status
export const counterState = (state) => state.counter.value
export const addValueState = (state) => state.addValue.listValue
export const listApi = state => state.addValue.listApi


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