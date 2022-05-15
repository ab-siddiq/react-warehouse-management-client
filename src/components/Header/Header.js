import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
  }
  console.log(user)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Diagnostic Equipment Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
              
            </Nav>
            <Nav>
              {
                user 
                && <div className="d-flex">
                    <Nav.Link as={Link} to='/addProduct'>Add Product</Nav.Link>
               <Nav.Link as={Link} to='/manageProduct'>Manage Product</Nav.Link>
                <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
                 <Nav.Link as={Link} onClick={handleLogout} to='/inventory'>Logout</Nav.Link>
                  </div>
                
              }
              {
                !user &&
                <div className="d-flex">
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                 <Nav.Link as={Link} to='/register'>registeer</Nav.Link>
                </div>
               
              }
              
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
