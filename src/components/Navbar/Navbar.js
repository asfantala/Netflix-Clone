import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavbarFunction() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Link to='/' >Home</Link>
            <Link to='/FavoriteList'>Favorite List</Link>

          </Nav>
        </Container>
      </Navbar>

    </>


  )
}

export default NavbarFunction;