import React ,{useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

import '../login/login.css'
import {Input, Loader , SecondaryButton , PrimaryButton} from '../../component'
import {auth} from '../../store/action/auth'
import useForm from '../../Costomehook/useForm'
import loginFormValidate from '../../Helper/loginFormvalidation'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from 'axios';
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const submitForm = () => {
    dispatch(auth({ email: values.userName, password: values.password }, false))
  }

  const { values, errors, handleInputChange, handleSubmit } = useForm(submitForm, loginFormValidate);

  const dispatch = useDispatch();

  const loading = useSelector(state => state.authState.loading);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

   
    return (
        <div className = "Login">

          {isAuthenticated && <Redirect to ="/"/>}

          {loading && <Loader/>}
                 {isSignUp?
                 <h1>Please Login</h1>  :  <h1>Please Sign Up</h1>
                 }
                 <Input name="userName" text="User Name" value={values.userName} autoFocus={true} onChange={handleInputChange} />          
                 {errors.userName && <label>{errors.userName}</label>}

                 <Input name="password" text="Password" value={values.password} onChange={handleInputChange} />
                 {errors.password && <label>{errors.password}</label>}
                {/* <Input value="" name="userName" text="User Name" autoFocus={true} onChange={() => {}} /> */}
               
               {
                 !isSignUp?
                <PrimaryButton text="Sign Up" onClick={()=> { dispatch(auth({email: values.userName,password:  values.password},false))}}/>
                :
                <PrimaryButton text="Login" onClick={handleSubmit}/>
               }
                <SecondaryButton text = "Reset"  />
                <br></br>
                {isSignUp?
                <h>Don't have an account?</h> 
                :
                <h>Do you have an account?</h>
                }
                {
                  isSignUp?
                <a href="#" class="ml-2" onClick={()=> { setIsSignUp(!isSignUp)}} >Sign Up</a>
                :
                <a href="#" class="ml-2" onClick={()=> { setIsSignUp(!isSignUp)}} >Login</a>
                }
					</div>
            
       
    )
}
export default withErrorHandler(Login, axios)
 
 
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

