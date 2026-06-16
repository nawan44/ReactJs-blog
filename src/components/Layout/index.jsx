import React, { useState } from 'react';
import './css/App.css';
import Routes from '../../Route';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const navIcon = {
    fontSIze: '60px',
    color: ' #222',
    marginRigth: '20px'
}
const navContent = {
    background: "linear-gradient(to right, #2980B9, #6DD5FA)",
    color: "#fff",
    fontSize: "30px"
}
const Layouting = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="demo-big-content">
            <Navbar expand="md" style={navContent} dark>
                <NavbarBrand tag={Link} to="/Home">Portofolio</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/Home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/AboutMe">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/Game">Game</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/Website">Website</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/Apps">Android</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div className="page-content">
                <Routes />
            </div>
        </div>
    );
}

export default Layouting;