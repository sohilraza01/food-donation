import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/login', formData);

      localStorage.setItem('user', JSON.stringify({
        email: response.data.user.email,
        role: response.data.role // assuming role is returned by the server
    }));
     // Redirect based on role
     if (response.data.role === 'Admin') {
      navigate('/dashboard');
  } else {
      window.location.href = 'http://localhost:3000/dashboard';  // Admin Panel
  }

      const { role } = response.data;  // Assuming the server returns user role

      // Redirect based on role
      switch (role) {
        case 'Admin':
          navigate('/dashboard');
          break;
        case 'Donor':
          window.location.href = 'http://localhost:5173/';
          break;
        case 'Agent':
          navigate('/agent');
          break;
        default:
          alert('Invalid role');
      }

      // Reset form
      setFormData({
        email: '',
        password: ''
      });
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login">
      <form onSubmit={loginHandler}>
        <div className="title">Login</div>
        <div className='login-form'>
          <label htmlFor="email"><FaUser /> Email</label>
          <input
            className="input-data"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /> 
          <br />
          
          <label htmlFor="password"><RiLockPasswordFill /> Password</label>
          <input
            type="password"
            name="password"
            className="input-data"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button id="btn" type="submit">Login</button>
          <p className="signup-link">
            Not yet a member? <Link to='/signup'>Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
