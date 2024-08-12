import React from 'react';
import { Link } from 'react-router-dom';
import './UserPanel.css';

const UserPanel = () => {
  const user = {
    name: "User",
    email: "user@gmail.com",
    profilePicture: "https://via.placeholder.com/150", // Placeholder for profile picture
    recentActivities: [
      "Logged in from India",
      "Updated profile picture",
      "Changed password",
    ],
    preferences: {
      theme: "Dark Mode",
      notifications: "Enabled",
    },
    security: {
      twoFactorAuth: true,
    },
    statistics: {
      posts: 120,
      followers: 450,
      following: 200,
    },
    interactions: [
      { type: "Comment", content: "Great post!", date: "2024-07-20" },
      { type: "Like", content: "Liked a post", date: "2024-07-19" },
      { type: "Share", content: "Shared a post", date: "2024-07-18" },
    ],
  };

  return (
    <section className="user-panel">
      <header className="user-panel-header">
        <h1>User Panel</h1>
      </header>

      <div className="user-info">
        <div className="profile-picture">
          <img src={user.profilePicture} alt="Profile" />
        </div>
        <h3>Welcome, {user.name}!</h3>
        <p>Email: {user.email}</p>
        <Link to="/update-profile">
          <button type="button" className="btn">Update Profile</button>
        </Link>
      </div>

      <div className="preferences">
        <h3>Preferences</h3>
        <p>Theme: {user.preferences.theme}</p>
        <p>Notifications: {user.preferences.notifications}</p>
        <Link to="/settings">
          <button type="button" className="btn">Edit Preferences</button>
        </Link>
      </div>

      <div className="security">
        <h3>Security Settings</h3>
        <p>Two-Factor Authentication: {user.security.twoFactorAuth ? "Enabled" : "Disabled"}</p>
        <Link to="/security-settings">
          <button type="button" className="btn">Manage Security</button>
        </Link>
      </div>

      <div className="user-statistics">
        <h3>User Statistics</h3>
        <div className="statistics">
          <div className="stat-item">
            <h4>Days</h4>
            <p>{user.statistics.posts}</p>
          </div>
          <div className="stat-item">
            <h4>Calories burnt</h4>
            <p>{user.statistics.followers}</p>
          </div>
          <div className="stat-item">
            <h4>Rest time</h4>
            <p>{user.statistics.following}</p>
          </div>
        </div>
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {user.recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      <div className="recent-interactions">
        <h3>Recent Interactions</h3>
        <ul>
          {user.interactions.map((interaction, index) => (
            <li key={index}>
              <strong>{interaction.type}:</strong> {interaction.content} <span>({interaction.date})</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="user-panel-footer">
        <Link to="/login">
          <button type="button" className="btn btn-logout">Log Out</button>
        </Link>
      </footer>
    </section>
  );
};

export default UserPanel;
