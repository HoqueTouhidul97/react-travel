import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../Icon/Logo.png';
import './TopBar.css'

const TopBar = () => {
    const {loggedUser} = useContext(userContext);
    const[loggedInUser,setLoggedInUser] = loggedUser;
    return (
        <div >
            <Container className="navbar-container">
                <Navbar className="navbar" expand="lg">
                    <Navbar.Brand  href="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="text-dark mr-4" to="/home">News</Link>
                            <Link className="text-dark mr-4" to="/destination">Destination</Link>
                            <Link className="text-dark mr-4" to="/blog">Blog</Link>
                            <Link className="text-dark mr-4" to="/contact">Contact</Link>
                            {
                                loggedInUser.name ?<Link className="text-dark mr-4">{loggedInUser.name}</Link> 
                                :<Link to="/login"> <Button variant="warning">Login</Button> </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default TopBar;