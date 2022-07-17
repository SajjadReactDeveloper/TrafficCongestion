import React from 'react'
import './addTeams.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddTeams() {
  const [team ,setTeam] = React.useState();
  const [lead ,setLead] = React.useState();
  const navigate = useNavigate();
  const add = async(e) => {
    try {
        e.preventDefault();
        const res = await axios.post('/adminTeam/add', {team, lead});
        console.log(res.data);
        navigate('/teams');
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
            <h1>Add Team</h1>
            <input type = "text" placeholder='Team Name' name='team' onChange={(e) => setTeam(e.target.value)} />
            <input type = "text" placeholder='Team Lead' name='lead' onChange={(e) => setLead(e.target.value)} />
            <button className="Loginbtn" type="submit" onClick={add}>Submit</button>
          </form>
        </div>
        <div className="overlay-containers">
              <img src= "a.jpg" alt="" style = {{ width: '100px', height: '500px' }} />
        </div>
        </div>
    </div>
            </div>
        </div>
    </div>
  )
}
