/* eslint-disable */

import './App.css';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import itemArray from './component/data';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './component/Detail';
import axios from 'axios';
import Cart from './component/Cart';

function App() {

  let [item, itemEdit] = useState(itemArray);
  let [stock, stockEdit] = useState([10,11,12]);

  return (
  <div className="App">

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Shopping Mall by Jacob</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail/0">Detail</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Switch>
    <Route exact path="/">
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
          {
            item.map((a,i)=>{
              return <Card item={item[i]} i={i} key={i}/>
            })
          }

          {/* <Card item={item[0]}/>
          <Card item={item[1]}/>
          <Card item={item[2]}/> */}
          
          {/* <div className='col-md-4'>
            <img src='img/jacket.jpg' width='100%'/>
            <h4>{item[0].title}</h4>
            <p>{item[0].content} & {item[0].price}</p>
          </div>

          <div className='col-md-4'>
            <img src='img/bomber.jpg' width='100%'/>
            <h4>{item[1].title}</h4>
            <p>{item[1].content} & {item[1].price}</p>
          </div>

          <div className='col-md-4'>
            <img src='img/shoes.jpg' width='100%'/>
            <h4>{item[2].title}</h4>
            <p>{item[2].content} & {item[2].price}</p>
          </div> */}
        
        </div>

          <button className='btn btnMore' onClick={()=>{

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 

              console.log(result.data);
              itemEdit([...item, ...result.data]);
             })
            .catch(()=>{
              console.log('404 Error');
            })
          }}>More</button>


      </div>
    </Route>

    <Route path="/detail/:id">
      <Detail item={item} stock={stock} stockEdit={stockEdit}/>
    </Route>

    <Route path="/cart">
       <Cart></Cart>   

    </Route>

    <Route path="/:id">
      <div>Constructing..</div>
    </Route>    
    
</Switch>



  </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
    <a href="/detail/0"><img src={'img/item' + (props.i + 1) +'.jpg'} width='100%'/></a>
    <h4>{props.item.title}</h4>
    <p>{props.item.content} & {props.item.price}</p>
  </div>
  )
}




export default App;
