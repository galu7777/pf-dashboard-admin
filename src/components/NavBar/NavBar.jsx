import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import style from "./NavBar.module.css"

function NavBar () {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Mercado Henry</Navbar.Brand>
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