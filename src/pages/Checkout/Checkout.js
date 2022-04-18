import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {checkoutId} = useParams();
    return (
        <div className='w-50 mx-auto my-5'>
        <h2 className='text-warning text-center mt-2'>Checkout The Information Again Before Booking</h2>
      <Form>
      <Form.Group className="mb-3" controlId="">
              <Form.Control type="text" placeholder="Enter Your Name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="warning" type="submit">
              Submit
          </Button>
      </Form>
      
  </div>
    );
};

export default Checkout;