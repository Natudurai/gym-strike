import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
  const [adminInfo, setAdminInfo] = useState({
    name: "Jane Smith",
    totalUsers: 0,
    activeSessions: 8,
    recentActivities: [],
    systemStatus: {
      serverHealth: "Good",
      lastBackup: "2024-07-28 15:00",
    },
    userManagement: {
      pendingRegistrations: 3,
      flaggedUsers: 2,
    },
    notifications: [
      "New feature update available",
      "System maintenance scheduled for 2024-08-01",
    ],
  });

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [userToUpdate, setUserToUpdate] = useState({ id: '', name: '' });
  const [userToDelete, setUserToDelete] = useState("");
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const adminResponse = await axios.get("http://localhost:300/api/admin/info", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setAdminInfo(adminResponse.data);

        const usersResponse = await axios.get("http://localhost:3000/api/admin/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(usersResponse.data);
      } catch (error) {
        console.error("Error fetching admin info or users:", error);
      }
    };

    fetchAdminInfo();
  }, []);

  const handleAddUser = async (event) => {
    event.preventDefault();
    if (newUser.trim() === "") return;

    try {
      const response = await axios.post("http://localhost:3000/api/admin/users", { name: newUser }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setUsers([...users, response.data]);
      setAdminInfo(prevInfo => ({
        ...prevInfo,
        totalUsers: prevInfo.totalUsers + 1,
        recentActivities: [...prevInfo.recentActivities, `Added new user: ${newUser}`],
      }));
      setNewUser("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleUpdateUser = async (event) => {
    event.preventDefault();
    if (userToUpdate.name.trim() === "") return;

    try {
      await axios.put(`http://localhost:3000/api/admin/users/${userToUpdate.id}`, { name: userToUpdate.name }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setUsers(users.map(user => (user.id === userToUpdate.id ? { ...user, name: userToUpdate.name } : user)));
      setAdminInfo(prevInfo => ({
        ...prevInfo,
        recentActivities: [...prevInfo.recentActivities, `Updated user: ${userToUpdate.name}`],
      }));
      setUserToUpdate({ id: '', name: '' });
      setSelectedUserDetails(null); // Clear selected user details after update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDeleteUser = async (event) => {
    event.preventDefault();
    if (userToDelete.trim() === "") return;

    try {
      await axios.delete(`http://localhost:3000/api/admin/users/${userToDelete}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setUsers(users.filter(user => user.id !== userToDelete));
      setAdminInfo(prevInfo => ({
        ...prevInfo,
        totalUsers: prevInfo.totalUsers - 1,
        recentActivities: [...prevInfo.recentActivities, `Deleted user: ${userToDelete}`],
      }));
      setUserToDelete("");
      setSelectedUserDetails(null); // Clear selected user details after delete
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSelectUserToUpdate = (userId) => {
    const selectedUser = users.find(user => user.id === userId);
    setUserToUpdate(selectedUser ? { id: selectedUser.id, name: selectedUser.name } : { id: '', name: '' });
    setSelectedUserDetails(selectedUser); // Show selected user details
  };

  const handleSelectUserToDelete = (userId) => {
    const selectedUser = users.find(user => user.id === userId);
    setUserToDelete(userId);
    setSelectedUserDetails(selectedUser); // Show selected user details
  };

  return (
    <section className="admin-panel">
      <header className="admin-panel-header">
        <h2>Admin Panel</h2>
      </header>

      <div className="admin-info">
        <h3>Welcome, Admin!</h3>
        <div className="admin-stats">
          <div className="stat-item">
            <h4>Total Users</h4>
            <p>{adminInfo.totalUsers}</p>
          </div>
          <div className="stat-item">
            <h4>Active Sessions</h4>
            <p>{adminInfo.activeSessions}</p>
          </div>
        </div>
      </div>

      <div className="system-status">
        <h3>System Status</h3>
        <p><strong>Server Health:</strong> {adminInfo.systemStatus.serverHealth}</p>
        <p><strong>Last Backup:</strong> {adminInfo.systemStatus.lastBackup}</p>
      </div>

      <div className="user-management">
        <h3>User Management</h3>
        <p><strong>Pending Registrations:</strong> {adminInfo.userManagement.pendingRegistrations}</p>
        <p><strong>Flagged Users:</strong> {adminInfo.userManagement.flaggedUsers}</p>

        <form onSubmit={handleAddUser} className="user-management-form">
          <h4>Add New User</h4>
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter new user's name"
            required
          />
          <button type="submit" className="btn">Add User</button>
        </form>

        <form onSubmit={handleUpdateUser} className="user-management-form">
          <h4>Update User</h4>
          <select
            value={userToUpdate.id}
            onChange={(e) => handleSelectUserToUpdate(e.target.value)}
          >
            <option value="" disabled>Select a user to update</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          {selectedUserDetails && (
            <div className="user-details">
              <p><strong>Current Name:</strong> {selectedUserDetails.name}</p>
              <p><strong>User ID:</strong> {selectedUserDetails.id}</p>
              {/* Add more user details here if needed */}
            </div>
          )}
          <input
            type="text"
            value={userToUpdate.name}
            onChange={(e) => setUserToUpdate({ ...userToUpdate, name: e.target.value })}
            placeholder="Enter new user's name"
            required
          />
          <button type="submit" className="btn">Update User</button>
        </form>

        <form onSubmit={handleDeleteUser} className="user-management-form">
          <h4>Delete User</h4>
          <select
            value={userToDelete}
            onChange={(e) => handleSelectUserToDelete(e.target.value)}
          >
            <option value="" disabled>Select a user to delete</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          {selectedUserDetails && (
            <div className="user-details">
              <p><strong>Name:</strong> {selectedUserDetails.name}</p>
              <p><strong>User ID:</strong> {selectedUserDetails.id}</p>
              {/* Add more user details here if needed */}
            </div>
          )}
          <button type="submit" className="btn">Delete User</button>
        </form>
      </div>

      {/* New Section to Display All Users */}
      <div className="user-list">
        <h3>All Users</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>ID:</strong> {user.id}</p>
              {/* You can add more user details here */}
            </li>
          ))}
        </ul>
      </div>

      <div className="notifications">
        <h3>Notifications</h3>
        <ul>
          {adminInfo.notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {adminInfo.recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      <footer className="admin-panel-footer">
        <Link to="/login">
          <button type="button" className="btn btn-logout">Log Out</button>
        </Link>
      </footer>
    </section>
  );
};

export default AdminPanel;
