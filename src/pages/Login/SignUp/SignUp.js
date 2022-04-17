import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='w-50 mx-auto'>
        <h2 className='text-warning text-center mt-2'>Please Sign Up</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="warning" type="submit">
              Submit
          </Button>
      </Form>
      <p>Already have an account? <Link to="/signup" className='text-danger pe-auto text-decoration-none' >Please Login</Link> </p>
      
  </div>
    );
};

export default SignUp;