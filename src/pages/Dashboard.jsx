import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

import {
  LineChart as RechartsLineChart,
  Line as RechartsLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  ResponsiveContainer,
} from 'recharts';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);


const data = [
  { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
];

// Sample data for react-chartjs-2
const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Projects Completed',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const lineChartData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Resource Utilization',
      data: [65, 59, 80, 81],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      {/* Data Sharing Module */}
      <Grid item xs={12} md={6}>
        <Link to="/data-sharing" style={{ textDecoration: 'none' }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Data Sharing</Typography>
          </Paper>
        </Link>
      </Grid>

      {/* Project Management Module */}
      <Grid item xs={12} md={6}>
        <Link to="/project-management" style={{ textDecoration: 'none' }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Project Management</Typography>
          </Paper>
        </Link>
      </Grid>

      {/* Discussion Forum Module */}
      <Grid item xs={12} md={6}>
        <Link to="/forum" style={{ textDecoration: 'none' }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Discussion Forum</Typography>
          </Paper>
        </Link>
      </Grid>

      {/* Training & Workshops Module */}
      <Grid item xs={12} md={6}>
        <Link to="/training" style={{ textDecoration: 'none' }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Training & Workshops</Typography>
          </Paper>
        </Link>
      </Grid>

      {/* Bar Chart for Projects Completed using react-chartjs-2 */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5">Projects Completed Over Time</Typography>
          <Bar data={barChartData} />
        </Paper>
      </Grid>

      {/* Line Chart for Resource Utilization using react-chartjs-2 */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5">Resource Utilization</Typography>
          <Line data={lineChartData} />
        </Paper>
      </Grid>

      {/* Custom Line Chart using recharts */}
      <Grid item xs={12} md={12}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5">Custom Line Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <RechartsTooltip />
              <RechartsLegend />
              <RechartsLine type="monotone" dataKey="pv" stroke="#8884d8" />
              <RechartsLine type="monotone" dataKey="uv" stroke="#82ca9d" />
            </RechartsLineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
