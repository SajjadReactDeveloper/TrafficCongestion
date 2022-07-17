import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import './viewTeams.css';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export default function () {
  const getData = async () => {
    const data = await axios.get("/adminTeam/view");
    setData(data.data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = React.useState([]);

  const deletes = async(id) => {
    const data = await axios.delete(`/adminTeam/delete/${id}`);
    getData();
    navigate('/teams');
  }

  const navig = (team) => {
    navigate('/teams/members', {state: {team: team}});
  }
  return (
    <div>
      <Navbar />
      <div className="row m-0 p-0">
        <div className="col-3 m-0 p-0">
          <Sidebar />
        </div>
        <div className="col-9 team">
            <div className="header">
                <h3>Teams</h3>
            </div>
            <div className="button">
                <Link to="/team/add"><button className="btn btn-success">Add Team</button></Link>
            </div>
          <table class="table table-stripped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Team ID</th>
                <th scope="col">Team Name</th>
                <th scope="col">Team Lead</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => (
                  <tr style={{ cursor: 'pointer' }} onClick = {() => navig(item.team)}>
                    <th scope="row">{index+1}</th>
                    <td>{item._id}</td>
                    <td>{item.team}</td>
                    <td>{item.lead}</td>
                    <td><DeleteIcon style={{ cursor: 'pointer' }} onClick = {() => {deletes(item._id)}} color="error" /></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
