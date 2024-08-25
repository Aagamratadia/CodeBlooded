// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const fetchProjects = () => axios.get(`${API_URL}/projects`);
export const fetchResources = () => axios.get(`${API_URL}/resources`);
