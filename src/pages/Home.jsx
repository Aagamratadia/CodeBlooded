// src/pages/Home.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Inter-Departmental Cooperation Platform
      </Typography>
      <Typography variant="h6" paragraph>
        This platform facilitates seamless coordination between various city departments for better urban governance.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/dashboard">
        Go to Dashboard
      </Button>
    </Container>
  );
};

export default Home;
