import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from './Reducers/transactionSlice'


export default store = configureStore({
	reducer : {
		transactions : transactionReducer,
	}
})