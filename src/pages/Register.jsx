// src/pages/Register.jsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/api/register', { name, email, password });
      alert('Registration successful!');
      // Redirect to login or dashboard
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
    </Container>
  );
};

export default Register;
