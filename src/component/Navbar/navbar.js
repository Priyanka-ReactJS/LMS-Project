import React from 'react'
import { Navbar, Nav, Form, FormControl } from '../Bootstrapwrap/bootstrapwrap'


const Navbarwrap = ({setCurrentPage}) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home" onClick={()=>setCurrentPage(1)}>Home</Nav.Link>
        <Nav.Link href="#Course" onClick={()=>setCurrentPage(2)}>Courese</Nav.Link>
        <Nav.Link href="#students" onClick={()=>setCurrentPage(3)}>Student</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />  
      </Form>
      <Nav.Link href="/" style={{"color": "white"}}>Logout</Nav.Link>
       </Navbar>
  )
}
export default Navbarwrap;