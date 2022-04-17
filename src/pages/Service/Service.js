import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const {name,price,description,img} = props.service;
    return (
        <div>
             <Card>
    <Card.Img className='img-fluid' variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <h2><small>$</small>{price}</h2>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="warning">Warning</Button>{' '}
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Service;