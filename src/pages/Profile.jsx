import { Outlet } from "react-router-dom"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileSidebar from "../components/Profile/Sidebar"
import './profile.css'

const Profile = () => {
    return (
        <div className="profile-wrapper">
            <div className="profile-sidebar-wrapper">
                <ProfileSidebar />
            </div>
            <div className="profile-right-wrapper">
                <div className="profile-header-wrapper">
                    <ProfileHeader />
                </div>
                <div className="profile-content-wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Profile