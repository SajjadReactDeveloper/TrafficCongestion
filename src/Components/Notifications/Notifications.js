import React, { useEffect } from "react";
import "./notifications.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Notifications() {
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("/notification/view");
      setData(data.data);
    };
    getData();
  }, []);
  const [data, setData] = React.useState([]);

  const deletes = async(id) => {
    const data = await axios.delete(`/notification/delete/${id}`);
  }
  return (
    <div>
      <Navbar />
      <div className="row m-0 p-0">
        <div className="col-3 m-0 p-0">
          <Sidebar />
        </div>
        <div className="col-9 m-0 p-0">
          <div className="notifications">
            <h1>Notifications</h1>
            <div className="buttons">
              <Link to="/notifications/add">
                <button className="btn btn-primary">Add Notifications</button>
              </Link>
            </div>
            {data.map((item) => (
              item.type == "success" ? <div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Warning:"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <strong>{item.notification}</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert" aria-label="Close"
                onClick={() => deletes(item._id)}
              ></button>
            </div>: item.type == "error" ? <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Warning:"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <strong>{item.notification}</strong> 
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert" aria-label="Close"
                onClick={() => deletes(item._id)}
              ></button>
            </div>: <div
              class="alert alert-primary alert-dismissible fade show"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Warning:"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <strong>{item.notification}</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert" aria-label="Close"
                onClick={() => deletes(item._id)}
              ></button>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
