import './header.css'
import ProfileImage from '../../assests/profile-image-20.jpg'


const Header = () =>{
    return(
        <div className="header-container">
            <div className="header-left">Profile</div>
            <div className="header-right">
                <img src={ProfileImage} />
                <p>Leanne Graham</p>
            </div>
        </div>
    )
}

export default Header