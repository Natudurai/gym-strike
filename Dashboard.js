// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Ensure you import the CSS file

const Dashboard = () => {
  // Example data
  const recentActivities = [
    { date: 'July 28, 2024', description: 'Completed a 5K run challenge.' },
    { date: 'July 26, 2024', description: 'Achieved new personal best in weight lifting.' },
    { date: 'July 24, 2024', description: 'Participated in a group yoga session.' }
  ];

  const keyMetrics = {
    workoutsCompleted: 45,
    activeDays: 22,
    totalDistance: '150 km',
    feedbackRating: '4.8/5'
  };

  const upcomingEvents = [
    { date: 'August 2, 2024', event: 'Group Run - 10K' },
    { date: 'August 5, 2024', event: 'Nutrition Workshop' },
    { date: 'August 8, 2024', event: 'Personal Training Session' }
  ];

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    membership: 'Premium Member',
    joinDate: 'January 15, 2023'
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><Link to="/user-panel">Go to User Panel</Link></li>
          <li><Link to="/progress">View Progress</Link></li>
          <li><Link to="/workout">View Workout Stats</Link></li>
          <li><Link to="/trainers">View Feedback</Link></li>
          <li><Link to="/settings">Go to Settings</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Dashboard</h1>
        <p>Welcome back, {userProfile.name}! Here’s a summary of your recent activities and important information.</p>

        <div className="profile-summary">
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Membership:</strong> {userProfile.membership}</p>
          <p><strong>Join Date:</strong> {userProfile.joinDate}</p>
          <Link to="/user-panel" className="dashboard-button">Edit Profile</Link>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Recent Activities</h3>
            <ul>
              {recentActivities.map((activity, index) => (
                <li key={index}>
                  <strong>{activity.date}:</strong> {activity.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Key Metrics</h3>
            <p><strong>Workouts Completed:</strong> {keyMetrics.workoutsCompleted}</p>
            <p><strong>Active Days:</strong> {keyMetrics.activeDays}</p>
            <p><strong>Total Distance:</strong> {keyMetrics.totalDistance}</p>
            <p><strong>Feedback Rating:</strong> {keyMetrics.feedbackRating}</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Upcoming Events</h3>
            <ul>
              {upcomingEvents.map((event, index) => (
                <li key={index}>
                  <strong>{event.date}:</strong> {event.event}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Quick Actions</h3>
            <ul>
              <li><Link to="/workout" className="dashboard-link">Log a Workout</Link></li>
              <li><Link to="/feedback" className="dashboard-link">Give Feedback</Link></li>
              <li><Link to="/settings" className="dashboard-link">Update Settings</Link></li>
            </ul>
          </div>
        </div>

        <div className="notification-card">
          <h3>Notifications</h3>
          <p>You have new feedback from your trainer. Check it out <Link to="/trainers">here</Link>.</p>
          <p>Your next workout session is scheduled for tomorrow. Don’t miss it!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
