import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import './sass/main.scss';
import Home from './views/Home.jsx';
import Dashboard from './views/Dashboard.jsx';


function App() {

  return (
    <Router>
      <Home path='/' />
      <Dashboard path='/dashboard' />
    </Router>
  );
}

export default App;
