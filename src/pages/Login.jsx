import React, { useState } from "react";

import Form from "react-bootstrap/Form";
// import { Form } from "react-router-dom";

import Button from "react-bootstrap/Button";

import "./Login.css";

import { useAuth } from "../utils/authContext";

export function Login() {

  const { login } = useAuth(); // Destructure login function from useAuth hook

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return username.length > 0 && password.length > 0;

  }

  // function handleSubmit (event) {
  const handleSubmit = async (event) => {

    event.preventDefault();
    
    try {
      await login(username, password);
      // If login succeeds, you can redirect the user or perform other actions
    } catch (error) {
      // setError('Invalid username or password');
      console.error('Login error:', error);
    }

  }

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="username">

          <Form.Label>Email</Form.Label>

          <Form.Control

            autoFocus

            type="text"

            value={username}

            onChange={(e) => setUsername(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Button>

      </Form>

    </div>

  );

}