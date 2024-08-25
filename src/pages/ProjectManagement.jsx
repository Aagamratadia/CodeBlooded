// src/pages/ProjectManagement.jsx
import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, Grid, Paper, TextField } from '@mui/material';
import axios from 'axios';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects', error);
      }
    };

    fetchProjects();
  }, []);

  const handleCreateProject = async () => {
    try {
      await axios.post('/api/projects', { name: newProject });
      setNewProject('');
      // Refresh project list
    } catch (error) {
      console.error('Error creating project', error);
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Project Management</Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{project.name}</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Manage</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Paper elevation={3} sx={{ padding: 2, mt: 5 }}>
        <Typography variant="h6">Create New Project</Typography>
        <TextField label="Project Name" fullWidth margin="normal" value={newProject} onChange={(e) => setNewProject(e.target.value)} />
        <Button variant="contained" color="primary" onClick={handleCreateProject}>Create Project</Button>
      </Paper>
    </Container>
  );
};

export default ProjectManagement;
