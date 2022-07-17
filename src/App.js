import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Dashboard/Home";
import Login from "./Components/Auth/Login";
import ViewTeams from "./Components/Teams/ViewTeams";
import AddTeams from "./Components/Teams/AddTeams";
import Notifications from "./Components/Notifications/Notifications";
import Profile from "./Components/Profile/Profile";
import Users from "./Components/Chat/Users";
import Chat from "./Components/Chat/Chat";
import ViewUsers from "./Components/Users/ViewUsers";
import AddUsers from "./Components/Users/AddUsers";
import AddNotifications from "./Components/Notifications/AddNotifications";
import TeamMembers from "./Components/Teams/TeamMembers";
import UpdateTeam from "./Components/Users/UpdateTeam";

function App() {
  const firstLogin = localStorage.getItem('firstLogin');
  console.log(firstLogin);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<ViewTeams />} />
      <Route path="/teams/members" element={<TeamMembers />} />
      <Route path="/users" element={<ViewUsers />} />
      <Route path="/users/add" element={<AddUsers />} />
      <Route path="/updateTeams" element={<UpdateTeam />} />
      <Route path="/team/add" element={<AddTeams />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/notifications/add" element={<AddNotifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat/users" element={<Users />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
