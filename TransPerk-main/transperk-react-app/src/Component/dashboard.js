import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import './styles/Dashboard.css';

const Dashboard = (props) => {
    const { darkMode, toggleDarkMode } = props;
    const [customer, setCustomer] = useState(null);
    const [stats, setStats] = useState({
        totalRequests: 0,
        pendingRequests: 0,
        completedRequests: 0,
        totalSpent: 0
    });

    useEffect(() => {
        // Load customer data from sessionStorage
        const customerData = JSON.parse(sessionStorage.getItem('customer'));
        setCustomer(customerData);

        // Mock stats - in real app, fetch from API
        setStats({
            totalRequests: 5,
            pendingRequests: 2,
            completedRequests: 3,
            totalSpent: 15000
        });
    }, []);

    const quickActions = [
        { to: '/Profile', icon: 'fas fa-user', label: 'View Profile' },
        { to: '/Editprofile', icon: 'fas fa-edit', label: 'Edit Profile' },
        { to: '/Request', icon: 'fas fa-plus-circle', label: 'Make Request' },
        { to: '/Customerrequest', icon: 'fas fa-list', label: 'View Requests' },
        { to: '/Requeststatus', icon: 'fas fa-clock', label: 'Request Status' },
        { to: '/Payment', icon: 'fas fa-credit-card', label: 'Make Payment' }
    ];

    const recentActivities = [
        { icon: 'fas fa-truck', title: 'Request Created', desc: 'New transportation request placed', time: '2 hours ago' },
        { icon: 'fas fa-check-circle', title: 'Payment Completed', desc: 'Payment for request #123 processed', time: '1 day ago' },
        { icon: 'fas fa-star', title: 'Rating Submitted', desc: 'Rated vendor service 5 stars', time: '2 days ago' }
    ];

    return (
        <div className={`dashboard-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className="dashboard-wrapper">
                {/* Sidebar */}
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h2 className="sidebar-title">Customer Dashboard</h2>
                        <p className="sidebar-subtitle">Welcome back, {customer?.name || 'Customer'}!</p>
                    </div>

                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/customerDashboard" className="nav-link-custom active">
                                <i className="fas fa-tachometer-alt nav-icon"></i>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Profile" className="nav-link-custom">
                                <i className="fas fa-user nav-icon"></i>
                                Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Request" className="nav-link-custom">
                                <i className="fas fa-plus-circle nav-icon"></i>
                                Make Request
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Customerrequest" className="nav-link-custom">
                                <i className="fas fa-list nav-icon"></i>
                                My Requests
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Payment" className="nav-link-custom">
                                <i className="fas fa-credit-card nav-icon"></i>
                                Payments
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Button
                                onClick={toggleDarkMode}
                                className="nav-link-custom"
                                style={{ width: '100%', justifyContent: 'flex-start' }}
                            >
                                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} nav-icon`}></i>
                                {darkMode ? 'Light Mode' : 'Dark Mode'}
                            </Button>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    {/* Welcome Section */}
                    <div className="welcome-section">
                        <h1 className="welcome-title">Welcome to Transynk</h1>
                        <p className="welcome-subtitle">Manage your transportation requests efficiently</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-truck"></i>
                            </div>
                            <div className="stat-title">Total Requests</div>
                            <div className="stat-value">{stats.totalRequests}</div>
                            <div className="stat-desc">All time requests</div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="stat-title">Pending</div>
                            <div className="stat-value">{stats.pendingRequests}</div>
                            <div className="stat-desc">Awaiting response</div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="stat-title">Completed</div>
                            <div className="stat-value">{stats.completedRequests}</div>
                            <div className="stat-desc">Successfully delivered</div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-rupee-sign"></i>
                            </div>
                            <div className="stat-title">Total Spent</div>
                            <div className="stat-value">₹{stats.totalSpent.toLocaleString()}</div>
                            <div className="stat-desc">This month</div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="quick-actions">
                        <h3 className="section-title">Quick Actions</h3>
                        <div className="actions-grid">
                            {quickActions.map((action, index) => (
                                <NavLink key={index} to={action.to} className="action-btn">
                                    <i className={`${action.icon} action-icon`}></i>
                                    {action.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="recent-activity">
                        <h3 className="section-title">Recent Activity</h3>
                        <ul className="activity-list">
                            {recentActivities.map((activity, index) => (
                                <li key={index} className="activity-item">
                                    <div className="activity-icon-small">
                                        <i className={activity.icon}></i>
                                    </div>
                                    <div className="activity-content">
                                        <div className="activity-title">{activity.title}</div>
                                        <div className="activity-desc">{activity.desc}</div>
                                    </div>
                                    <div className="activity-time">{activity.time}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
