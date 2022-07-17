import React, {useEffect} from "react";
import "./viewUsers.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import axios from "axios";

export default function ViewUsers() {
  const navigate = useNavigate();
  const getData = async () => {
    const data = await axios.get("/user/view");
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = React.useState([]);

  const deletes = async(id) => {
    const data = await axios.delete(`/user/delete/${id}`);
    getData();
    navigate('/users');
  }

  const update = async(id) => {
    navigate('/updateTeams', {state: {id: id}});
  }
  return (
    <div>
      <Navbar />
      <div className="row m-0 p-0">
        <div className="col-3 m-0 p-0">
          <Sidebar />
        </div>
        <div className="col-9 m-0 p-0">
          <div className="users">
            <h1>Users</h1>
            <div className="button">
                <Link to="/users/add"><button className="btn btn-primary">Add User</button></Link>
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
                  <th scope="col">Update Teams</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => (
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td><Avatar alt="Remy Sharp" src={item.image} /></td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.team}</td>
                      <td><DeleteIcon style={{ cursor: 'pointer' }} onClick = {() => {deletes(item._id)}} color="error" /></td>
                      <td><EditIcon style={{ cursor: 'pointer' }} onClick = {() => {update(item._id)}} color="success" /></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
