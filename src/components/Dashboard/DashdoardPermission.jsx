import { Navigate } from "react-router-dom"

const DashdoardPermission = ({ children }) =>{
    const id = localStorage.getItem('id')
    if(!id){
        return <Navigate to='/' />
    }
    else{
        return children
    }
}

export default DashdoardPermission