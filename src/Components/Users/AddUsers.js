import React from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './addUsers.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddUsers() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [team, setTeam] = React.useState();

  const navigate = useNavigate();
  const add = async(e) => {
    try {
        e.preventDefault();
        const res = await axios.post('/user/register1', {name, email, password, team});
        console.log(res.data);
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
            <h1>Add User</h1>
            <input type = "text" placeholder='User Name' name='name' onChange={(e) => setName(e.target.value)} />
            <input type = "email" placeholder='User Email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <input type = "password" placeholder='Enter Password' name='password' onChange={(e) => setPassword(e.target.value)} />
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
