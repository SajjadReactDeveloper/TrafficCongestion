import React, {useEffect} from "react";
import "./user.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ChatIcon from '@mui/icons-material/Chat';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Avatar from '@mui/material/Avatar';

export default function Users() {
  const navigate = useNavigate();
  const getData = async () => {
    const data = await axios.get("/user/view");
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = React.useState([]);

  const chat = async(id, image, name) => {
    navigate('/chat', {state: {id, image, name}});
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
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
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
                      <td><ChatIcon onClick = {() => chat(item._id, item.image, item.name)} style = {{ cursor: 'pointer' }} /></td>
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
