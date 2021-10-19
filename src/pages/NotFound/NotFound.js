import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../../images/NotFound/404.jpg.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
           <img className="NotFound" src= {Notfound} alt="" />
           <Link to="/"><button>Please Go Back</button></Link>
        </div>
    );
};

export default NotFound;