import React from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './addUsers.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function UpdateTeam() {
  const [team, setTeam] = React.useState();
  const {state} = useLocation();
    const { id } = state;

  const navigate = useNavigate();
  const add = async(e) => {
    try {
        e.preventDefault();
        const data = await axios.patch(`/user/updatess/${id}`, {team});
        console.log(data.data);
        navigate('/users');
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
            <h1>Update Team</h1>
            <input type = "text" placeholder='Enter Team' name='team' onChange={(e) => setTeam(e.target.value)} />
            <button className="Loginbtn" type="submit" onClick={add}>Submit</button>
          </form>
        </div>
        <div className="overlay-containers">
              <img src= "c.jpg" alt="" style = {{ width: '335px', height: '500px' }} />
        </div>
        </div>
    </div>
            </div>
        </div>
    </div>
  )
}
