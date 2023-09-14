import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Assessment,
  Track,
  Chat,
  Profile,
  Landing,
  Book,
  Check,
  Login,
  Register,
  Blockweb,
  Userdata,
  MeetCounc,
} from './pages';
import Dashboard from './pages/Dashboard';
import Loginc from './pages/Loginc';
import Registerc from './pages/Registerc';
import Addiction from './pages/Addiction';
import Academics from './pages/Academics';
import Relationship from './pages/Relationship';
import Other from './pages/Other';
import Support from './pages/Support';
import Support1 from './pages/Support1';
import Support2 from './pages/Support2';
import Consultant from './pages/Consultant';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Meet from './pages/Meet';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/track" element={<Track />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Landing />} />
        <Route path="/Appointment/new" element={<Book />} />
        <Route path="/Appointment/past" element={<Check />} />
        <Route path="/register" element={<Register />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/meetcs" element={<MeetCounc />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/blockweb" element={<Blockweb />} />
        <Route path="/addiction" element={<Addiction />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/relationship" element={<Relationship />} />
        <Route path="/other" element={<Other />} />
        <Route path="/support" element={<Support />} />
        <Route path="/addictionSupp" element={<Support1 />} />
        <Route path="/academicsSupp" element={<Support2 />} />
        <Route path="/registerc" element={<Registerc />} />
        <Route path="/loginc" element={<Loginc />} />
        <Route path="/consultant" element={<Consultant />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/admindashboard" element={<AdminDashboard />} />
        <Route exact path="/userdata" element={<Userdata />} />
      </Routes>
    </div>
  );
}

export default App;
