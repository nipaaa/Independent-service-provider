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
        <div id="services">
            <h2 className='text-warning text-center pb-3 pt-5'>Services</h2>
            <CardGroup>
            {
                services.map(service=> <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </CardGroup>
        </div>
    );
};

export default Services;