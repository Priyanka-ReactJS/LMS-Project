import React from 'react'
import {Button} from '../Bootstrapwrap/bootstrapwrap'
import '../Button/Button.css'
const SecondaryButton =({text , onClick})=> {
    return(
        <Button variant="secondary" text ={text} className = 'Button' onClick={onClick}>{text}</Button>
    )
}
export default SecondaryButton;