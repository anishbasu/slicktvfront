import React from 'react'
import './style.css'

const LoginButton = ({handler}) => (
    <button className="login-button" onClick={handler}>Log In</button>
)

export default LoginButton;