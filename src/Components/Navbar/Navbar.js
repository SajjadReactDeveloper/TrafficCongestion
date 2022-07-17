import React from 'react';
import './navbar.css';
import TrafficIcon from '@mui/icons-material/Traffic';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
    const firstLogin = localStorage.getItem('firstLogin');
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '5px', position: 'fixed', width: '100%', top: '0px' }}>
        <div className="navbar">
            <div className="logo">
                <TrafficIcon color='white' fontSize='large' className='iconsss' />
                <h3>Traffic Congestion</h3>
            </div>
            <div className="list">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="login">
                {firstLogin ? <Avatar alt="Remy Sharp" src="b.jpg" /> : <Link to = "/login"><button className='btn btn-primary'>Login</button></Link>}
            </div>
        </div>
    </div>
  )
}
