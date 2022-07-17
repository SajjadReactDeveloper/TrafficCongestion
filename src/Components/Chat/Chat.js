import React, {useEffect} from 'react';
import './chat.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Chat() {
    const {state} = useLocation();
    const { id, image, name } = state;

    const [message, setMessage] = React.useState();

    const send = async(e) => {
        try {
            e.preventDefault();
            const res = await axios.post('/message/add', {receiver: id, message});
            getData();
            console.log(res);
        } 
        catch (error) {
            
        }
    }

    const getData = async () => {
        const data = await axios.get("/message/view");
        setData(data.data);
      };
      useEffect(() => {
        getData();
      }, []);
      const [data, setData] = React.useState([]);
  return (
    <div>
        <Navbar />
        <div className="row m-0 p-0">
            <div className="col-3 m-0 p-0">
                <Sidebar />
            </div>
            <div className="col-9 m-0 p-0">
                <div className="chatHeader">
                    <Avatar alt="Remy Sharp" src={image} />
                    <h5>{name}</h5>
                </div>
                <div className="chat">
                    {data.map(item => (
                         item.receiver == id ?  <span>{item.message}</span>: null
                    ))}
                </div>
                <div className="receive">
                    <span>Sajjad Akhtar</span>
                    <span>Hello</span>
                </div>
                <div className="chatBottom">
                    <input type="text" name="" id="" placeholder='Enter Message' onChange={(e) => setMessage(e.target.value)} />
                    <SendIcon style = {{ cursor: 'pointer' }} onClick = {send} />
                </div>
            </div>
        </div>
    </div>
  )
}
