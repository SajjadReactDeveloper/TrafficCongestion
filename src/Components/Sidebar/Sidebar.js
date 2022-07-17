import React from 'react';
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import TrafficIcon from '@mui/icons-material/Traffic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const Logout = async() => {
    localStorage.removeItem('firstLogin');
    navigate('/');
  }
  return (
    <div className='sidebar'>
        <ul className='sidebarList'>
            <li><Link style={{ textDecoration: 'none' }} to = "/"><DashboardIcon className='iconss' /><a href="">Dashboard</a></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to = "/users"><GroupIcon className='iconss' /><a href="">Users</a></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to = "/teams"><GroupsIcon className='iconss' /><a href="">Teams</a></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to = "/teams"><TrafficIcon className='iconss' /><a href="">Traffic Congestion</a></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to = "/notifications"><NotificationsIcon className='iconss' /><a href="">Notifications</a></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to = "/chat/users"><ChatIcon className='iconss' /><a href="">Chat</a></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to = "/profile"><AccountCircleIcon className='iconss' /><a href="">Profile</a></Link></li>
            <li onClick={Logout}><LogoutIcon className='iconss' /><a href="">Logout</a></li>
        </ul>
    </div>
  )
}
