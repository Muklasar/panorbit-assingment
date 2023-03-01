import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/UserReducer'


const store = configureStore({
    reducer:{
        user: userSlice.reducer
    }
})

export default store