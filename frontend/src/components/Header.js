
import  { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginReducer } from '../reducers/userReducers'
import { logout } from '../actions/userActions'


const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () =>{
    dispatch(logout())
  }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
<Container>
    
  <Navbar.Brand href="/">Myshop</Navbar.Brand>
  
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      
  
    <Nav className="ml-auto">
        
      <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
      {userInfo ? (
        <NavDropdown title={userInfo.name} id ='username'>
          <LinkContainer to='/profile'>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
        </NavDropdown>
      ) : 
      <Nav.Link href="/login"><i className="fas fa-user"></i> SignIn</Nav.Link>
}
      
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
