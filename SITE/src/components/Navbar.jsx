import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../components/css/navbar.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



const NavigationBar = (props) => {
    return (
        <>
            <Navbar  expand="lg" className="myCol">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/home" className="nav-link myNav">Home</Link>
                            <Link className="nav-link myNav" to="/test">Test</Link>
                        </Nav>

                        <Form className="d-flex mt-2 mb-2">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;