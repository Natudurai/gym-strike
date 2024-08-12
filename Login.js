import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Login.css'; // Assuming this is your existing CSS file

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '', role: 'user' });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [loginError, setLoginError] = useState('');

  const apiurl = "http://localhost:8080/api/auth/authenticate";

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleForgotPasswordChange = (e) => {
    setForgotPasswordEmail(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);

    try {
      const response = await axios.post(apiurl, {
        email: loginData.email,
        password: loginData.password,
      });

      console.log(response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      const role = response.data.role;

      if (role === "ADMIN") {
        toast.success('Logged in successfully as Admin!');
        setTimeout(() => {
          navigate('/admin-panel');
        }, 1500);
      } else if (role === "USER") {
        toast.success('Logged in successfully!');
        setTimeout(() => {
          navigate('/user-panel');
        }, 1500);
      } else {
        setLoginError('Invalid role or credentials.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Invalid email or password');
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot Password Email:', forgotPasswordEmail);
    // Implement the forgot password logic here
    setShowForgotPassword(false);
  };

  return (
    <div className="Login">
      <div className="login-container">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                placeholder="Enter email" 
                value={loginData.email} 
                onChange={handleLoginChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                name="password" 
                placeholder="Password" 
                value={loginData.password} 
                onChange={handleLoginChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select 
                className="form-control" 
                id="role" 
                name="role" 
                value={loginData.role} 
                onChange={handleLoginChange} 
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Login</button>
            {loginError && <p className="login-error">{loginError}</p>}
            <div className="login-footer">
              <div className="forgot-password-link">
                <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
              </div>
              <div className="signup-link">
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </form>

          {showForgotPassword && (
            <div className="forgot-password-modal">
              <div className="forgot-password-content">
                <h5>Forgot Password</h5>
                <form onSubmit={handleForgotPasswordSubmit}>
                  <input
                    type="email"
                    name="forgotPasswordEmail"
                    placeholder="Enter your email"
                    value={forgotPasswordEmail}
                    onChange={handleForgotPasswordChange}
                    required
                  />
                  <button type="submit">Reset Password</button>
                  <button type="button" onClick={() => setShowForgotPassword(false)}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
