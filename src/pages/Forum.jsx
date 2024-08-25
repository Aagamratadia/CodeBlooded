// src/pages/Forum.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/forum');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching forum posts', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePost = async () => {
    try {
      await axios.post('/api/forum', { content: newPost });
      setNewPost('');
      // Refresh post list
    } catch (error) {
      console.error('Error posting message', error);
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Discussion Forum</Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.content} secondary={`Posted by ${post.author}`} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="New Post"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handlePost}>Post</Button>
    </Container>
  );
};

export default Forum;
