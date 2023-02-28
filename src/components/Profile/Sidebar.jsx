import { NavLink } from 'react-router-dom'
import './sidebar.css'

const arrowSvg = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
</svg>

const ProfileSidebar = () => {
    return (
        <div className="profile-sidebar-container">
            <div className="profile-sidebar-title-box">
                <NavLink to="/profile/profile" className={navData=> navData.isActive ? 'profile-sidebar-title-active' : 'profile-sidebar-title-deactive'}>
                    <p>Profile</p>
                    <div>{arrowSvg}</div>
                </NavLink>
                <NavLink to="/profile/post" className={navData=> navData.isActive ? 'profile-sidebar-title-active' : 'profile-sidebar-title-deactive'}>
                    <p>Post</p>
                    <div>{arrowSvg}</div>
                </NavLink>
                <NavLink to="/profile/gallary" className={navData=> navData.isActive ? 'profile-sidebar-title-active' : 'profile-sidebar-title-deactive'}>
                    <p>Gallary</p>
                    <div>{arrowSvg}</div>
                </NavLink>
                <NavLink to="/profile/todos" className={navData=> navData.isActive ? 'profile-sidebar-title-active' : 'profile-sidebar-title-deactive'}>
                    <p>Todos</p>
                    <div>{arrowSvg}</div>
                </NavLink>
            </div>
        </div>
    )
}

export default ProfileSidebar