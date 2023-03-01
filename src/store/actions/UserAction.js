import axios from "axios"
import { userAction } from "../reducers/UserReducer"


export const fetchUserData = () =>{
    return async(dispatch)=>{
        const getData = async() =>{
            const response = await axios.get('https://panorbit.in/api/users.json')
            const data = response.data.users
            return data
        }
        try{
            const data = await getData()
            console.log("try",data)
            dispatch(userAction.replaceData(data))
        }catch(err){
            console.log('error', err)
        }
    }
}