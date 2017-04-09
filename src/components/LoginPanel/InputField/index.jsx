import React from 'react'
import './style.css'
const InputField = ({type, name, value, handler}) => (
    <input className="input-field" type={type} value={value} name={name} onChange={handler}/>
)

export default InputField;