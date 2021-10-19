import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Contract.css';

const ContactUs = () => {
    return (
        <div className="contact">
            <div className="contact-us" >
            <div>
           
            <br />
            <h4>Head Office</h4>
            <h6>Comfort Tower
            167/B, Green Road,Sylhet, Bangladesh.
            info@insafbd.com
            Phone : 02-222246338, 02-222246339, 02-222246340, 02-222246341, 02-58153661 & 02-58157007
            Extn : 0, 104 & 106
            Mobile : 01731 956033, 01552 468377</h6>
            <br />
            <h4>Branch Office</h4>
            <h6>
             House # 22, Road # Rabindra Sarani
             Sector # 07, Uttara, Dhaka-1230
             Telephone: 58956388 AND 58954726
            </h6>
            </div>
            <div>
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;