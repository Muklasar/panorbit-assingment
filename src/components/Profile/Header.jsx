import './header.css'
import ProfileImage from '../../assests/profile-image-20.jpg'


const Header = () =>{
    return(
        <div className="profile-header-container">
            <div className="profile-header-left">Profile</div>
            <div className="profile-header-right">
                <img src={ProfileImage} />
                <p>Leanne Graham</p>
            </div>
        </div>
    )
}

export default Header