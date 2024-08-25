// src/pages/NotFound.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>404 - Page Not Found</Typography>
      <Typography variant="h6" paragraph>The page you are looking for does not exist.</Typography>
      <Button variant="contained" color="primary" component={Link} to="/">Go Home</Button>
    </Container>
  );
};

export default NotFound;
