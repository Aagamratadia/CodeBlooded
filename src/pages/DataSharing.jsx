// src/pages/DataSharing.jsx
import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button, Typography } from '@mui/material';
import axios from 'axios';

const DataSharing = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('/api/resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Data and Resource Sharing</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Department</TableCell>
            <TableCell>Resource</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resources.map((resource) => (
            <TableRow key={resource.id}>
              <TableCell>{resource.department}</TableCell>
              <TableCell>{resource.name}</TableCell>
              <TableCell>{resource.type}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">Request Access</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default DataSharing;
