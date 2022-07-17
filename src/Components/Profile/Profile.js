import React from "react";
import "./profile.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chart from "react-apexcharts";
import ProfileUi from 'react-profile-card';

const options = {
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="row m-0 p-0">
        <div className="col-3 m-0 p-0">
          <Sidebar />
        </div>
        <div className="col-9 m-0 p-0">
          <div className="single">
            <div className="singleContainer">
              <div className="top">
                <div className="left">
                    
                  <div className="item">
                    <img src="b.jpg" alt="" className="itemImg" />
                    <div className="details">
                      <h1 className="itemTitle">Admin</h1>
                      <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span
                          className="itemValue"
                          style={{ color: "#000", marginLeft: "10px" }}
                        >
                          admin@gmail.com
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Role:</span>
                        <span
                          className="itemValue"
                          style={{ color: "#000", marginLeft: "10px" }}
                        >
                          Admin
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width={500}
                    height={320}
                  />
                </div>
              </div>
              <div className="bottom">
                <h1 className="title">Last Transactions</h1>
                <TableContainer component={Paper} className="table">
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
