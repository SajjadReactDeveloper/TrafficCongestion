import React from "react";
import "./login.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TrafficIcon from '@mui/icons-material/Traffic';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Login() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const navigate = useNavigate();

  const Login = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/admin/login', {email, password});
      console.log(res.data.msg);
      if(res.data.msg === "Login Successfull!"){
        localStorage.setItem('firstLogin', true);
        navigate('/');
      }
      else {
        alert('Login Failed');
      }
    } catch (error) {
      
    }
  }
  return (
    <div className="bodyss">
        <div className = "loginContainer right-panel-active"
        id="container">
        <div className="form-container sign-in-container">
          <form action="" >
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="">
                <FacebookOutlinedIcon />
              </a>
              <a href="">
                <InstagramIcon />
              </a>
              <a href="">
                <TwitterIcon />
              </a>
            </div>
            <span>or use your account</span>
            <input type = "text" placeholder='Username' name='email' onChange={(e) => setEmail(e.target.value)} />
            <input type = "password" placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} />
            <button className="Loginbtn" type="submit" onClick={Login}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlayss">
            <div className="overlay-panel overlay-left">
              <h3>Welcome back!</h3>
              <p>
                To keep connected with us please login with your personal info
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
