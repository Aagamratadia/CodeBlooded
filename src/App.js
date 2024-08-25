// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import DataSharing from './pages/DataSharing';
import ProjectManagement from './pages/ProjectManagement';
import Forum from './pages/Forum';
import Training from './pages/Training';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data-sharing" element={<DataSharing />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/training" element={<Training />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
