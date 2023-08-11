import { createSlice } from '@reduxjs/toolkit'

const transactionSlice = createSlice({
	name:'transactions',
	initialState:[],
	reducers : {
        addTransaction(state, action){
            state.push(action.payload)
        },
    }
})
export default transactionSlice.reducer
export const { addTransaction, getBalance} = transactionSlice.actions