import React from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import axios from'axios';
import { useNavigate } from 'react-router-dom';

export default function AddNotifications() {
    const [type, setType] = React.useState();
    const [notification, setNotification] = React.useState();

    const navigate = useNavigate();

    const add = async(e) => {
        try {
            e.preventDefault();
            const res = await axios.post('/notification/add', {type, notification});
            console.log(res.data);
            navigate('/notifications');
        } catch (error) {
            
        }
    }
  return (
    <div>
        <Navbar />
        <div className="row m-0 p-0">
            <div className="col-3 m-0 p-0">
                <Sidebar />
            </div>
            <div className="col-9 add">
                <div className="bodys">
        <div className = "loginContainer right-panel-active"
        id="container">
        <div className="form-container sign-in-container">
          <form action="" >
            <h1>Notifications</h1>
            <input type = "text" placeholder='Notification Type' name='type' onChange={(e) => setType(e.target.value)} />
            <input type = "text" placeholder='Notification' name='notification' onChange={(e) => setNotification(e.target.value)} />
            <button className="Loginbtn" type="submit" onClick={add}>Submit</button>
          </form>
        </div>
        <div className="overlay-containerss">
              <img src= "d.jpg" alt="" style = {{ width: '500px', height: '500px' }} />
        </div>
        </div>
    </div>
            </div>
        </div>
    </div>
  )
}
