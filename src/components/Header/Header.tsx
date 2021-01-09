import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import './Header.css'

const Header = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand className = "text-white" href="/">Users Control App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="/" className="navLinkItem">Home</Nav.Link>
                    <Nav.Link href="#link" className={"navLinkItem"}>Add user</Nav.Link>
                    <Nav.Link href="#link" className={"navLinkItem"}>Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header