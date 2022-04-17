import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <CardGroup>
            {
                services.map(service=> <Service
                id={service.id}
                service={service}
                ></Service>)
            }
            </CardGroup>
        </div>
    );
};

export default Services;