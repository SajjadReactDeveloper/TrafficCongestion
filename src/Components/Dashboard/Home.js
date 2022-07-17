import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./home.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import { Chart } from "react-charts";
import Chart from "react-apexcharts";


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

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const series1 =  [44, 55, 13, 43, 22]
            const options1 = {
              chart: {
                width: 380,
                type: 'pie',
              },           
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }

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

export default function Home() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 10 },
          { x: 3, y: 10 },
        ],
      },
      {
        label: "Series 2",
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 10 },
          { x: 3, y: 10 },
        ],
      },
      {
        label: "Series 3",
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 10 },
          { x: 3, y: 10 },
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0">
          <Sidebar />
        </div>
        <div className="col-9 p-0 m-0">
          <div
            style={{
              display: "flex",
              marginBottom: "70px",
              paddingTop: "20px",
              paddingRight: "20px",
              marginTop: '90px'
            }}
          >
            <div className="widget">
              <div className="lefts">
                <span className="title">USERS</span>
                <span className="counter">55656</span>
                <span className="link">See all Users</span>
              </div>
              <div className="rights">
                <div className="percentage positive">
                  <KeyboardArrowUpOutlinedIcon />
                  20%
                </div>
                <PersonOutlineOutlinedIcon className="icon" />
              </div>
            </div>
            <div className="widget">
              <div className="lefts">
                <span className="title">USERS</span>
                <span className="counter">55656</span>
                <span className="link">See all Users</span>
              </div>
              <div className="rights">
                <div className="percentage positive">
                  <KeyboardArrowUpOutlinedIcon />
                  20%
                </div>
                <PersonOutlineOutlinedIcon className="icon" />
              </div>
            </div>
            <div className="widget">
              <div className="lefts">
                <span className="title">USERS</span>
                <span className="counter">55656</span>
                <span className="link">See all Users</span>
              </div>
              <div className="rights">
                <div className="percentage positive">
                  <KeyboardArrowUpOutlinedIcon />
                  20%
                </div>
                <PersonOutlineOutlinedIcon className="icon" />
              </div>
            </div>
            <div className="widget">
              <div className="lefts">
                <span className="title">USERS</span>
                <span className="counter">55656</span>
                <span className="link">See all Users</span>
              </div>
              <div className="rights">
                <div className="percentage positive">
                  <KeyboardArrowUpOutlinedIcon />
                  20%
                </div>
                <PersonOutlineOutlinedIcon className="icon" />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: '40px', marginTop: '50px' }}>
            <div className="">
              <div className="" style={{ marginRight: '80px' }}>
              <Chart
                    options={options1}
                    series={series1}
                    type="pie"
                    width={500}
                    height={320}
                  />
              </div>
            </div>
            <div
              className=""
            >
              <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width={500}
                    height={320}
                  />
            </div>
          </div>
          <div></div>
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
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
  );
}
