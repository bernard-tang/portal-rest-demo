import React, { useState } from "react";

import Form from "react-bootstrap/Form";
// import { Form } from "react-router-dom";

import Button from "react-bootstrap/Button";

import "./Login.css";

import { post } from '../utils/apiUtils'

export function Login() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return username.length > 0 && password.length > 0;

  }

  // function handleSubmit (event) {
  const handleSubmit = async (event) => {

    event.preventDefault();
    try {
      const response = await post(`/auth/login`, {
        username: username,
        password: password, // Example: Setting completed to false by default
      });
      // const newTodoData = await httpRequest('POST', '/auth/login', {
      //   username: username,
      //   password: password, // Example: Setting completed to false by default
      // });
      const token = response;
      localStorage.setItem('jwtToken', token); // Save token after successful login
      // Redirect or navigate to authenticated route

      console.log('New todo created:', response);
      // You can handle the response here, e.g., update state, show success message, etc.
      setNewTodoTitle(''); // Clear input field after successful creation
    } catch (error) {
      console.error('Error creating todo:', error);
      // Handle error state or show error message to user
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