import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TeamMembers() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { team } = state;

  const getData = async () => {
    const data = await axios.get("/user/view");
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = React.useState([]);

  const deletes = async(id) => {
    const data = await axios.patch(`/user/updates/${id}`);
    getData();
    navigate('/teams');
  }
  return (
    <div>
        <Navbar />
        <div className="row m-0 p-0">
            <div className="col-3 m-0 p-0">
                <Sidebar />
            </div>
            <div className="col-9 m-0 p-0" >
                <h1 style={{ marginTop: '110px', marginBottom: '40px' }}>Team Members</h1>
                <div className="button">
            </div>
                <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Team</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => (
                    item.team == team ? <tr>
                    <th scope="row">{index+1}</th>
                    <td><Avatar alt="Remy Sharp" src={item.image} /></td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.team}</td>
                    <td><DeleteIcon style={{ cursor: 'pointer' }} onClick = {() => {deletes(item._id)}} color="error" /></td>
                  </tr>: null
                  ))
                }
              </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}
