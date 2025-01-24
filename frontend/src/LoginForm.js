import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from './api';
import { ToastContainer, toast } from 'react-toastify'; // Add import

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', { username: email, password });
      // console.log(response.data.body.token)
      if (response.status === 200 ) {
        const responseBody = typeof response.data.body === 'string' ? JSON.parse(response.data.body) : response.data.body;
        console.log(responseBody)
        // Extract the token from the parsed response body
        const token = responseBody.token;
        console.log(token);


          // Save the token in local storage or a secure cookie
        localStorage.setItem('token', token);

        // Navigate to the synthetic data generator app
        if(token != undefined){
          toast.success(
            'Logged in successfully'
            );
          navigate('/synthetic-data-generator');
        }
        else {
          toast.warn(
            'Login failed'
            );
          setError('Invalid email or password');
        }
        
      } else {
        toast.warn(
          'Login failed'
          );
          setError('Invalid email or password');
      }
    } catch (error) {
      toast.warn(
        'Login failed'
        );
        setError('Invalid email or password');
    }
  };

  return (
    <div className="login-form">
      <h5 className='mb-5'>Login to your account</h5>
      <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label htmlFor="username">Username (Email ID)</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder='Enter your corporate email-ID...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='Enter your password...'
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{textAlign:"end"}}>
        <button type="button" className="forgotPassword btn btn-link mt-2" >Forgot Password?</button>
        </div>
        <div>
        <button style={{width: "-webkit-fill-available",backgroundColor:"#0097ab"}} type="submit" className="btn btn-primary mt-2">Login</button>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
        </div>      
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;