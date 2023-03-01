import './landingPage.css'
import ProfileImage from '../assests/profile-image-20.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '../store/reducers/UserReducer'
import { useEffect } from 'react'
import { fetchUserData } from '../store/actions/UserAction'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
    const users = useSelector(user => user.user.data)
    console.log('data', users)
    const navigationHandler = (id) => {
        console.log('id', id)
        navigate(`/dashboard/profile/${id}`)
    }
    const allUsers = users?.map((user) => {
        let id = user.id
        return (
            <div className='landing-card-profile' onClick={() => navigationHandler(id)}>
                <div className='landing-card-profile-image'>
                    <img src={user.profilepicture} />
                </div>
                <p className=''>{user.name}</p>
            </div>)
    })
    return (
        <div className="landing-container">
            <div className="landing-card">
                <div className="landing-card-heading">
                    <div className='landing-card-heading-text'>Select an account</div>
                </div>
                <div className='landing-card-body'>
                    {allUsers}
                </div>
            </div>
            {/* <div class="container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#5000ca" fill-opacity="1" d="M0,96L34.3,133.3C68.6,171,137,245,206,240C274.3,235,343,149,411,144C480,139,549,213,617,218.7C685.7,224,754,160,823,138.7C891.4,117,960,139,1029,170.7C1097.1,203,1166,245,1234,256C1302.9,267,1371,245,1406,234.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
                    </path>
                </svg>
            </div> */}
        </div>
    )
}

export default LandingPage