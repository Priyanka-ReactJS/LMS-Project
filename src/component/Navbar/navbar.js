import React from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl } from '../Bootstrapwrap/bootstrapwrap'
import {logout} from '../../store/action/auth';
import './navbar.css';


const Navbarwrap = ({isAuthenticated }) => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">LMS</Navbar.Brand>
      <Nav className="mr-auto" id="Navbar">
        {/* <Nav.Link href="#home" onClick={()=>setCurrentPage(1)}>Home</Nav.Link>
        <Nav.Link href="#Course" onClick={()=>setCurrentPage(2)}>Courese</Nav.Link>
        <Nav.Link href="#students" onClick={()=>setCurrentPage(3)}>Student</Nav.Link> */}
         <Link to="/">Home</Link>
        <Link to="/course">Courese</Link>
        <Link to="/student">Student</Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />  
      </Form>
      {isAuthenticated ?
      <Nav.Link href="/" style={{"color": "white"}} onClick ={() => dispatch(logout())}>Logout</Nav.Link> 
      :
      <Nav.Link href="/" style={{ "color": "white" }} >Login</Nav.Link>
      }
       </Navbar>
  )
}
export default Navbarwrap;