
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
          const {user,logOut}=useAuth();
    return (
        <div className="header-container">
            <>
  <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Insaf Diagenostic Center</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link href as = {HashLink} to ="/home#home">Home</Nav.Link>
      <Nav.Link href as = {HashLink} to="/Home#services">Services</Nav.Link>
      <Nav.Link href as = {Link} to="/AboutUs">About-Us</Nav.Link>
      <Nav.Link href as = {Link} to="/ContactUs">Contact-Us</Nav.Link>
     {
     user?.email ? <Button onClick={logOut} variant="success">LogOut</Button>:
     <Nav.Link href as = {Link} to="/Login">Login</Nav.Link>}
      <Navbar.Text>
        Signed : <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    <Nav className="me-auto">
    </Nav>
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default Header;