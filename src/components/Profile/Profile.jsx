import './profile.css'
import ProfileImage from '../../assests/profile-image-20.jpg'
import SimpleMap from './Map'

const Profile = () => {
    const center = {
        lat: -3.745,
        lng: -38.523
      };
    return (
        <div className="row dashboard-profile-container">
            <div className='col-4 dashboard-profile-left'>
                <div className='dashboard-profile-left-top'>
                    <img src={ProfileImage} />
                    <p>Leanne Graham</p>
                </div>
                <div className='dashboard-profile-left-middle'>
                    <div className='d-flex align-items-center'>
                        <div className='profile-text-1 text-end'>Username</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>Bret</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>e-mail</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>Bret@gmil.com</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Phone</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>99999999</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Website</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>www.bret.com</div>
                    </div>
                </div>
                <div className='dashboard-profile-left-end'>
                    <div className='d-flex align-items-center'>
                        <div className='profile-text-1 w-100 pe-3 border-top pt-2 me-5 ms-3 mb-3'>Company</div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='profile-text-1 text-end'>Name</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>Roma</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>cathpharse</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>Multi-layered client-server neural</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Phone</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>99999999</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Website</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>www.bret.com</div>
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
                        <div className='profile-text-2 text-start'>Roma</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Suite</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>Multi-layered client-server neural</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>City</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>99999999</div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='profile-text-1 text-end'>Zip Code</div>
                        <div className=' text-start ms-3 me-3'>:</div>
                        <div className='profile-text-2 text-start'>203092</div>
                    </div>
                    <div className='profile-map-container'>
                        <SimpleMap center = {center} />
                    </div>
                    <div className='profile-location-container d-flex align-items-center justify-content-end'>
                        <div className='d-flex align-items-center'>
                            <p className='point-text'>Lat <span className='ms-1 me-1'>:</span> </p>
                            <p className='point-value'>{center.lat}</p>
                        </div>
                        <div className='d-flex align-items-center me-2 ms-3'>
                            <p className='point-text'>Long <span className='ms-1 me-1'>:</span></p>
                            <p className='point-value'>{center.lng}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile