
import  { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
<Container>
    
  <Navbar.Brand href="/">Myshop</Navbar.Brand>
  
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      
  
    <Nav className="ml-auto">
        
      <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
      <Nav.Link href="/login"><i className="fas fa-user"></i> SignIn</Nav.Link>
     
      
    </Nav>
   

    {/* <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
  
  
  </Container>
</Navbar>
        </header>
    )
}

export default Header
