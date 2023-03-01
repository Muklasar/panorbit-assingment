import { Outlet } from "react-router-dom"
import DashboardHeader from "../components/Dashboard/Header"
import DashboardSidebar from "../components/Dashboard/Sidebar"
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-sidebar-wrapper">
                <DashboardSidebar />
            </div>
            <div className="dashboard-right-wrapper">
                <div className="dashboard-header-wrapper">
                    <DashboardHeader />
                </div>
                <div className="dashboard-content-wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard