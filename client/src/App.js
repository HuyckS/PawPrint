import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import './sass/main.scss';
import Home from './views/Home.jsx';
import Dashboard from './views/Dashboard.jsx';
import EmergencyInfo from './views/EmergencyInfo';
import Chat from "./views/Chat";
import Notifications from "./views/Notifications";
import Profile from "./views/Profile";


function App() {

  return (
    <Router>
      <Home path='/' />
      <Dashboard path='/dashboard' />
      <Chat path="/chat" />
      <Notifications path="/notifications" />
      <Profile path="/profile" />
      <EmergencyInfo path="/emergency" />
    </Router>
  );
}

export default App;
