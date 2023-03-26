import Nav from 'react-bootstrap/Nav';


function Navbar ({location}) {
    return (
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link href='/'> 
                    <div>HOME</div>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="Link-1" href="/stocks"> 
                    <div>STOCKS</div>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link  href='/about'> 
                    <div>ABOUT</div>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;