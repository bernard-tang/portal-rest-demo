import React, { useState } from "react";

import Form from "react-bootstrap/Form";
// import { Form } from "react-router-dom";

import Button from "react-bootstrap/Button";

import "./Login.css";

import { useAuth } from "../utils/authContext";

import { useNavigate } from 'react-router-dom';

import defaultBannerImage from '../assets/bg.jpeg';

export function Login() {

  const { login } = useAuth(); // Destructure login function from useAuth hook

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  // State to handle login error
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  function validateForm() {

    return username.length > 0 && password.length > 0;

  }

  // function handleSubmit (event) {
  const handleSubmit = async (event) => {

    event.preventDefault();
    
    try {
      const loggedIn = await login(username, password);
      // If login succeeds, you can redirect the user or perform other actions

      if(loggedIn) {
        navigate('/Home'); 
      }
      else
      {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      // setError('Invalid username or password');
      console.error('Login error:', error);
      // Set the error message
      setErrorMessage(error.message);
    }

  }

  return (

    <div className="login-banner">
    <div className="banner-image">
      <img src={defaultBannerImage} alt="Banner" />
    </div>
    <div className="login-form">
      <div className="login-panel">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>

          {/* <Form.Group size="lg" controlId="username"> */}

            <div className="form-group">

            {/* <Form.Label>Email</Form.Label> */}
            <label htmlFor="username">Username</label>

            {/* <Form.Control

              autoFocus

              type="text"

              value={username}

              onChange={(e) => setUsername(e.target.value)}

            /> */}
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

          {/* </Form.Group> */}

          {/* <Form.Group size="lg" controlId="password"> */}
          <div className="form-group">
          <label htmlFor="password">Password</label>

            {/* <Form.Label>Password</Form.Label> */}

            {/* <Form.Control

              type="password"

              value={password}

              onChange={(e) => setPassword(e.target.value)}

            /> */}
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

          {/* </Form.Group> */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <Button block size="lg" type="submit" disabled={!validateForm()}>

            Login

          </Button>

        </Form>
      </div>
      {/* <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form> */}
    </div>
    </div>



  );

}