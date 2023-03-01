import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState:{
        data: null
    },
    reducers:{
        replaceData(state, action){
            state.data = action.payload
        }
    }
})

export const userAction = userSlice.actions
export default userSlice