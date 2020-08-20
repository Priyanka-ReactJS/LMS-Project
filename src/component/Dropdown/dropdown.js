import React, { useState } from 'react'
import {FormControl ,Dropdown, InputGroup, DropdownButton } from '../Bootstrapwrap/bootstrapwrap'

const Dropdownwrap = ({setSelectValue , options , title ,name , onChange,value,}) => {
  const dropdownValues = options.filter(option => option.id === value)
  const [dropdownValue,setdropdownValue]= useState((dropdownValues[0] ||[]).name);

  const handleClick = (e) => {
    setdropdownValue(e.target.innerText);
    setSelectValue && setSelectValue(Number(e.target.id));
    onChange(e.target.name, Number(e.target.id))
  }

    return( <InputGroup className="mb-3">
     <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={title}
      id="input-group-dropdown-1"
    >
      {
      (options || []).map(option => {
      return <Dropdown.Item  name={name} href='#' onClick={(e)=>handleClick(e)} id={option.id}>{option.name}</Dropdown.Item>
      })
    }
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" value={dropdownValue} />
  </InputGroup>
    )
}
export default Dropdownwrap