import React from 'react'
import {Button} from '../Bootstrapwrap/bootstrapwrap'

const PrimaryButton = ({variant, text, className, onClick }) => {
    return(
    <Button variant={variant} className={className} onClick={onClick}>{text}</Button>
    )
}
export default PrimaryButton;