import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar () {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Nav className="me-auto">

                <Nav.Link href='/'> 
                    <div>HOME</div>
                </Nav.Link>
            </Nav>
          
            
            <Nav className="me-auto">
                <Nav.Link href="/stocks"> 
                    <div>STOCKS</div>
                </Nav.Link>
            </Nav>

            <Nav className="me-auto">
                <Nav.Link  href='/about'> 
                    <div>ABOUT</div>
                </Nav.Link>

            </Nav>

            </Container>
        
            
        </Navbar>
    )
}

export default NavBar;