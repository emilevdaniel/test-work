import React from 'react';
import {Container, Nav, Navbar,} from "react-bootstrap";
import {NavLink} from "react-router-dom";


import './Header.css'
import logo from './Images/logo.png'


const Header = props => {
    return (

        <Navbar collapseOnSelect expand={'md'} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/">Домой</Nav.Link>
                        <Nav.Link as={NavLink} to="/myworks">Мои работы</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;