// src/pages/Settings.jsx
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Settings = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put('/api/user', userData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Settings</Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>Update Profile</Button>
    </Container>
  );
};

export default Settings;
