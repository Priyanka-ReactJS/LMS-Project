 import { Button, FormGroup, FormControl , Label    } from "react-bootstrap";
 import {Input} from '../../component';
 import React, { useState } from "react";


 const Login = ({setIsAuthenticated}) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   const validateForm = () => {
     return email.length > 0 && password.length > 0;
   }

   const handleSubmit = (event) => {
     event.preventDefault();
   }
   const handleClick =() => {
       const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      if(emailValid && password){
        setIsAuthenticated(true)
      }
   }
   return (
    <div className="Login">
       <form onSubmit={handleSubmit}>
         <FormGroup controlId="email" bsSize="small">
         <p>Email</p>
         <FormControl  autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
         </FormGroup>
         <FormGroup controlId="password" bsSize="large">
         <p>Password</p>
           <FormControl value={password} onChange={e => setPassword(e.target.value)} type="password"/>
         </FormGroup>
         <Button block bsSize="small" disabled={!validateForm()} onClick={()=>{handleClick() }} type="submit">
           Login
         </Button>  
       </form>
     </div>
   );
 }


export default Login;

