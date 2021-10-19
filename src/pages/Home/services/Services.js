import React, { useEffect, useState } from 'react';
import Service from '../sertvice/Service';
import './Services.css';

const Services = () => {
    const [services,setservices] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(date => setservices(date))
    },[]);
    return (
     <div id="services">
         <h1 className="title">Our Services</h1>
         <div className="services-container">
            {
                services.map(service => <Service
                key = {service.id}
                service ={service}
                ></Service>)
            }
        </div>
     </div>
    );
};

export default Services;