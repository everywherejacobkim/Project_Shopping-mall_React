import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';

function App() {
  return (
  <div className="App">

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shopping Mall by Jacob</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="Jumbotron">
        <h1>
          50% End of Year Sale
        </h1>
        <p>
          Enjoy our end of year extra 50% off holiday sale. Online only.
          Exclusions/terms may apply when you check out.
        </p>
        <Button variant="info">Explore</Button>{' '}
    </div>

    <div className='container'>
      <div className='row'>

        <div className='col-md-4'>
          <img src='img/jacket.jpg' width='100%'/>
          <h4>Item Name</h4>
          <p>Desc & Price</p>
        </div>

        <div className='col-md-4'>
          <img src='img/bomber.jpg' width='100%'/>
          <h4>Item Name</h4>
          <p>Desc & Price</p>
        </div>

        <div className='col-md-4'>
          <img src='img/shoes.jpg' width='100%'/>
          <h4>Item Name</h4>
          <p>Desc & Price</p>
        </div>
      
      </div>

    </div>


    
  </div>
  );
}

export default App;
