import React ,{useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import '../login/login.css'
import {Input, Loader , SecondaryButton , PrimaryButton} from '../../component'
import {auth} from '../../store/action/auth'


const Login = ({setIsAuthenticated}) => {
  const[userName , setUserName] = useState('');
  const [password , setPassword] = useState('');
  const [isSignup , setIsSignup] = useState(true);  

  const resetValue = () => {
    return {
      userName : "",
      password : ""
    }
  }
    const dispatch = useDispatch();
    const loading = useSelector(state => state.authState.loading);
    console.log("auth..." ,auth)
   
    return (
        <div className = 'Login'>
          {loading && <Loader/>}
                 {isSignup?
                 <h1>Please Login</h1>  :  <h1>Please Sign Up</h1>
                 }              
                <Input text="User Name" value = {userName} autoFocus={true} onChange = {(e) => setUserName(e.target.value)}/>
                <Input text="Password" type="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
                {/* <Input value="" name="userName" text="User Name" autoFocus={true} onChange={() => {}} /> */}
               
               {
                 !isSignup?
                <PrimaryButton text="Sign Up" onClick={()=> { dispatch(auth({email: userName,password: password},true))}}/>
                :
                <PrimaryButton text="Login" onClick={()=> { dispatch(auth({email: userName,password: password},false))}}/>
               }
                <SecondaryButton text = "Reset"  onClick={()=> {resetValue()}} />
                <br></br>
                {isSignup?
                <h>Don't have an account?</h> 
                :
                <h>Do you have an account?</h>
                }
                {
                  isSignup?
                <a href="#" class="ml-2" onClick={()=> { setIsSignup(!isSignup)}} >Sign Up</a>
                :
                <a href="#" class="ml-2" onClick={()=> { setIsSignup(!isSignup)}} >Login</a>
                }
					</div>
            
       
    )
}
export default Login;
 
 
/* import { Button, FormGroup, FormControl    } from "react-bootstrap";
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


export default Login;*/

