import './header.css'
import ProfileImage from '../../assests/profile-image-20.jpg'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'


const Header = () => {
    const users = useSelector(user => user.user.data)
    const id = localStorage.getItem('id')
    const user = users?.filter(user => user.id == id)[0]
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('id')
        navigate('/')
    }
    const [modal, setModal] = useState(false)

    const modalHandler = () => {
        setModal(!modal)
    }
    return (
        <div className='position-relative'>

            <div className="header-container" onClick={modalHandler}>
                <div className="header-left">Profile</div>
                <div className="header-right">
                    <img src={user?.profilepicture} />
                    <p>{user?.name}</p>
                </div>
            </div>
            {modal &&
                <div className='profile-modal'>
                    <div className='profile-modal-upper'>
                        <img src={user?.profilepicture} />
                        <div>{user?.name}</div>
                        <p>{user?.email}</p>
                    </div>
                    <div className='profile-list'>
                        <img src={user?.profilepicture} />
                        <p>{user?.name}</p>
                    </div>
                    <div className='profile-list'>
                        <img src={user?.profilepicture} />
                        <p>{user?.name}</p>
                    </div>
                    <button className='signout-button' onClick={logout}>
                        Sign out
                    </button>
                </div>}
        </div>

    )
}

export default Header