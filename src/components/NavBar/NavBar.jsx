import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar () {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
          <img src="/public/homelogo.png" alt="logo" style={{ width: "150px", height: "50px" }}/>
            
            </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a>Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  
    )
}

export default NavBar;