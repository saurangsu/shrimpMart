import React, { Component } from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './headerComponent.css'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const HeaderComponent = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <Navbar sticky="top" variant="dark">
            <Navbar.Brand href="/">
                <img src="https://img.icons8.com/officel/48/000000/prawn.png" alt="logo" />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Nav>
        </Navbar>
    )

}

export default HeaderComponent;