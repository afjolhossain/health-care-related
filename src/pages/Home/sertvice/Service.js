import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    
    const {id,name,img,details,price}= service;
    return (
        <div className="service">
        <h4 className="Product-name">Name : {name}</h4>
        <img className="img" src={img} alt="" />
        <h4>Price : {price}</h4>
       <p> Description : {details}</p>
       <Link to ={`/Booking/${id}`}>
         <button >book </button>
       </Link>
        </div>
    );
};

export default Service;