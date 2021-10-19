import React from 'react';
import { Card } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Card className="footer-container" sticky="bottom">
            <div className="all-info">
            <div>
                <h3> Contact Us</h3>
                <p> House #21, Road # 2,</p>
                   <p> sylhet R/A, sylhet-1205, </p>
                   <p> Bangladesh</p>
                   <p> Phone : 09613 787801, 09666 787801</p>
                   <p> E-mail : info@insafdiagnostic.com</p>
             </div>
             <div>
                 <h3>Important Links</h3>
                 <p>Insaf Pharmaceuticals</p>
                 <p>Insaf Medical College</p>
                 <p>Insaf Medical College Hospital</p>
                 <p>Management Team</p>
             </div>
             <div>
                 <h3>Quick Links</h3>
                 <p>Our Services</p>
                 <p>Our Branches</p>
                 <p>Call for Appointments</p>
                 <p>Find Docotrs</p>
                 <p>Gallery</p>
             </div>
            </div>
            <p className="copyright">© Copyright 2019. Insaf Diagnostic Centre Ltd.</p>
            </Card>
        </div>
    );
};

export default Footer;