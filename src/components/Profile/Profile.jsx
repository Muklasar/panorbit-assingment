import './profile.css'
import SimpleMap from './Map'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Profile = () => {
    const users = useSelector(user => user.user.data)
    const uid = useSelector(user => user.user.id)
    const { id } = useParams()
    const user = users?.filter(user => user.id == id)[0]
    const [center, setCenter] = useState({
        lat: 43.6532,
        lng: -79.3832,
    });
    useEffect(() => {
        setCenter({
            lat: parseFloat(user?.address.geo.lat),
            lng: parseFloat(user?.address.geo.lng)
        })
    }, [user])

    console.log('profile_id', uid)

    return (
        <div className="row dashboard-profile-container">
            <div className='col-4 dashboard-profile-left'>
                <div className='dashboard-profile-left-top'>
                    <img src={user.profilepicture} />
                    <p>{user?.name}</p>
                </div>
                <div className='dashboard-profile-left-middle'>
                    <div className='d-flex align-items-center'>
                        <div className='profile-text-1 text-end'>Username</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.username}</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className=' profile-text-1 text-end'>e-mail</div>
                        <div className='text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.email}</div>
                    </div>

                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Phone</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.phone}</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Website</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.website}</div>
                    </div>
                </div>
                <div className='dashboard-profile-left-end'>
                    <div className='d-flex align-items-center'>
                        <div className='profile-text-1 w-100 pe-3 border-top pt-2 me-5 ms-3 mb-3'>Company</div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='profile-text-1 text-end'>Name</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.company?.name}</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>cathpharse</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.company?.catchPhrase}</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Phone</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.company?.phone}</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Website</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.company?.website}</div>
                    </div>
                </div>
            </div>
            <div className='col-8 dashboard-profile-right'>
                <div className='d-flex align-items-start jutify-content-start'>
                    <div className='dashboard-profile-right-heading w-100 text-start ms-2'>Address : </div>
                </div>
                <div className='ps-5 pt-3'>
                    <div className='d-flex align-items-center'>
                        <div className='profile-text-1 text-end'>Street</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.address?.street}</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Suite</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.address?.suite}</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>City</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.address?.city}</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Zip Code</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>{user?.address?.zipcode}</div>
                    </div>
                    <div className='profile-map-container'>
                        <SimpleMap center={center} />
                    </div>
                    <div className='profile-location-container d-flex align-items-center justify-content-end'>
                        <div className='d-flex align-items-center'>
                            <p className='point-text'>Lat <span className='ms-1 me-1'>:</span> </p>
                            <p className='point-value'>{user?.address?.geo?.lat}</p>
                        </div>
                        <div className='d-flex align-items-center me-2 ms-3'>
                            <p className='point-text'>Long <span className='ms-1 me-1'>:</span></p>
                            <p className='point-value'>{user?.address?.geo?.lng}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile