import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = (props) => {
  const { id,name, price, description, img } = props.service;

  const navigate = useNavigate();

  const navigateToCheckout = id =>{
      navigate(`/services/${id}`)
  }

  return (
    <Card className="m-2 p-3">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title><sup>$</sup>{price}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button onClick={()=> navigateToCheckout(id)} variant="warning">Checkout</Button>
          </Card.Body>
           
        </Card>

  );
};

export default Service;