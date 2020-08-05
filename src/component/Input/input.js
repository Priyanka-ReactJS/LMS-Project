
 import React from 'react'

 import {InputGroup,FormControl} from '../Bootstrapwrap/bootstrapwrap'
  
 const Input =({text,autoFocus,onChange,name,value})=>{
     return(
  
     <InputGroup className="mb-3">
      <InputGroup.Prepend>
     <InputGroup.Text id="basic-addon1">User Name</InputGroup.Text>
       </InputGroup.Prepend>
       <FormControl
         placeholder={text}
         aria-label={text}
         aria-describedby="basic-addon1"
         autoFocus={autoFocus}
         onChange={onChange}
         name={name}
         value={value}
       />
     </InputGroup> 
     )

 }
 export default Input