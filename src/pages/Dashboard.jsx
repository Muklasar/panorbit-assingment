import { Outlet } from "react-router-dom"
import DashboardHeader from "../components/Dashboard/Header"
import DashboardSidebar from "../components/Dashboard/Sidebar"
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="position-relative">
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
            <div className="message-box-wrapper">
                <div className="message-box">
                    <div className="message-header">
                        <div className="d-flex align-items-center justify-content-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-chat-right" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                            </svg>
                            <p className="message-heading-text">Charts</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-caret-up" viewBox="0 0 16 16">
                                <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard