// src/pages/HomeDashboard.js
import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { Bar, Pie, Line, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  RadarController,
  PointElement,
  RadialLinearScale,
} from 'chart.js';

// Registering the necessary chart.js modules
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  RadarController,
  PointElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const HomeDashboard = () => {
  // Data for analytics
  const totalMeetings = 100;
  const successfulMeetings = 75;
  const canceledMeetings = 25;
  const totalSessions = 50;
  const successfulSessions = 40;
  const canceledSessions = 10;
  const totalInterviews = 30;
  const successfulInterviews = 25;
  const canceledInterviews = 5;
  const totalServices = 60;
  const successfulServices = 55;
  const canceledServices = 5;
  const starRatingMeetings = 4.5;
  const starRatingSessions = 4.2;
  const starRatingInterviews = 4.8;
  const starRatingServices = 4.6;

  // Bar chart data for overall success and cancellations
  const barData = {
    labels: ['Meetings', 'Sessions', 'Interviews', 'Services'],
    datasets: [
      {
        label: 'Successful',
        data: [successfulMeetings, successfulSessions, successfulInterviews, successfulServices],
        backgroundColor: '#007aff',
        borderColor: '#005bb5',
        borderWidth: 2,
        borderRadius: 5,
        barThickness: 20,
      },
      {
        label: 'Canceled',
        data: [canceledMeetings, canceledSessions, canceledInterviews, canceledServices],
        backgroundColor: '#f44336',
        borderColor: '#d32f2f',
        borderWidth: 2,
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  // Pie chart data for distribution of meetings
  const pieData = {
    labels: ['Meetings', 'Sessions', 'Interviews', 'Services'],
    datasets: [
      {
        data: [totalMeetings, totalSessions, totalInterviews, totalServices],
        backgroundColor: ['#007aff', '#1e88e5', '#29b6f6', '#4fc3f7'],
        hoverBackgroundColor: ['#005bb5', '#1976d2', '#0288d1', '#039be5'],
        borderWidth: 1,
      },
    ],
  };

  // Line chart data for feedback ratings
  const lineData = {
    labels: ['Meetings', 'Sessions', 'Interviews', 'Services'],
    datasets: [
      {
        label: 'Average Rating',
        data: [starRatingMeetings, starRatingSessions, starRatingInterviews, starRatingServices],
        fill: false,
        backgroundColor: '#ffc107',
        borderColor: '#ffeb3b',
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  // Radar chart data for feedback ratings
  const radarData = {
    labels: ['Meetings', 'Sessions', 'Interviews', 'Services'],
    datasets: [
      {
        label: 'Feedback Ratings',
        data: [starRatingMeetings, starRatingSessions, starRatingInterviews, starRatingServices],
        backgroundColor: 'rgba(0, 122, 255, 0.2)',
        borderColor: '#007aff',
        pointBackgroundColor: '#007aff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#007aff',
        borderWidth: 2,
      },
    ],
  };

  // Chart options with animations
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Maintain size for mobile view
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: 'bold',
            family: 'Arial, sans-serif',
          },
          color: '#333',
        },
      },
      title: {
        display: false,
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: 'bold',
            family: 'Arial, sans-serif',
          },
          color: '#333',
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: '#e0e0e0',
        },
        grid: {
          color: '#e0e0e0',
        },
        ticks: {
          display: true,
          font: {
            size: 10,
          },
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutBounce',
    },
  };

  return (
    <Box sx={{ padding: '10px' }}>
      {/* Analytics Header */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center', color: '#007aff', fontFamily: 'Roboto, sans-serif' }}>
        Meeting Analytics
      </Typography>

      {/* Overview of Total Counts */}
      <Grid container spacing={1} sx={{ marginBottom: '10px' }}>
        <Grid item xs={6} sm={3}>
          <Paper elevation={3} sx={{ padding: '10px', textAlign: 'center', backgroundColor: '#007aff', color: '#fff', borderRadius: '8px', animation: 'fadeIn 1s' }}>
            <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>Total Meetings</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{totalMeetings}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={3} sx={{ padding: '10px', textAlign: 'center', backgroundColor: '#1e88e5', color: '#fff', borderRadius: '8px', animation: 'fadeIn 1s' }}>
            <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>Total Sessions</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{totalSessions}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={3} sx={{ padding: '10px', textAlign: 'center', backgroundColor: '#29b6f6', color: '#fff', borderRadius: '8px', animation: 'fadeIn 1s' }}>
            <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>Total Interviews</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{totalInterviews}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={3} sx={{ padding: '10px', textAlign: 'center', backgroundColor: '#4fc3f7', color: '#fff', borderRadius: '8px', animation: 'fadeIn 1s' }}>
            <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>Total Services</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{totalServices}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Bar Chart for Success and Cancellations */}
      <Paper elevation={3} sx={{ padding: '10px', marginBottom: '10px', height: '180px', borderRadius: '8px', animation: 'fadeIn 1s' }}>
        <Bar data={barData} options={chartOptions} />
      </Paper>

      {/* Pie Chart for Distribution */}
      <Paper elevation={3} sx={{ padding: '10px', marginBottom: '10px', height: '180px', borderRadius: '8px', animation: 'fadeIn 1s' }}>
        <Pie data={pieData} options={chartOptions} />
      </Paper>

      {/* Line Chart for Feedback Ratings */}
      <Paper elevation={3} sx={{ padding: '10px', marginBottom: '10px', height: '180px', borderRadius: '8px', animation: 'fadeIn 1s' }}>
        <Line data={lineData} options={chartOptions} />
      </Paper>

      {/* Radar Chart for Feedback Comparison */}
      <Paper elevation={3} sx={{ padding: '10px', height: '180px', borderRadius: '8px', animation: 'fadeIn 1s' }}>
        <Radar data={radarData} options={radarOptions} />
      </Paper>
    </Box>
  );
};

export default HomeDashboard;
