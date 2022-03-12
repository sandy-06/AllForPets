import React from 'react'
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
//import Login from './Login';


function appNavbar({ currentPage, handlePageChange }) {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Nav className="btn">
          <Nav.Link href="#Food"onClick={() => handlePageChange('Food')}><Button>Food</Button></Nav.Link>

          <Nav.Link href="#Toys" onClick={() => handlePageChange('Toys')}><Button>Toys</Button></Nav.Link>
          <Nav.Link href="#Gear"><Button>Gear</Button></Nav.Link>
          <Nav.Link href="#Health"><Button>Health</Button></Nav.Link>
          <Nav.Link href="#Homepage"><Button>Home</Button></Nav.Link>
          <Nav.Link href="#Login"><Button>Login</Button></Nav.Link>
          <Nav.Link href="#Signup"><Button>Signup</Button></Nav.Link>
          <Nav.Link href="#Cart"><Button>Cart</Button></Nav.Link>

        </Nav>

      </Container>
    </Navbar>
  )
}
export default appNavbar;