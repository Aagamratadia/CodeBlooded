
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import axios from 'axios';

const Training = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await axios.get('/api/trainings');
        setTrainings(response.data);
      } catch (error) {
        console.error('Error fetching training sessions', error);
      }
    };

    fetchTrainings();
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Training and Capacity Building</Typography>
      <Grid container spacing={3}>
        {trainings.map((training) => (
          <Grid item xs={12} md={6} key={training.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{training.title}</Typography>
              <Typography variant="body2">{training.description}</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Enroll</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Training;
