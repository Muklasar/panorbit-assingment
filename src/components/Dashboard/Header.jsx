import './header.css'
import ProfileImage from '../../assests/profile-image-20.jpg'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const Header = () =>{
    const users = useSelector(user=>user.user.data)
    const id = localStorage.getItem('id')
    const user = users.filter(user=>user.id==id)[0]
    return(
        <div className="header-container">
            <div className="header-left">Profile</div>
            <div className="header-right">
                <img src={user?.profilepicture} />
                <p>{user?.name}</p>
            </div>
        </div>
    )
}

export default Header