import React from 'react'
import {Link} from 'react-router-dom'
import InputField from './InputField'
import LoginButton from './LoginButton'

import './style.css'
const LoginPanel = ({username, password, inputHandler, submitHandler}) => (
    <div className="login-panel">
        <h2>Log In</h2>
        <InputField type="text" name="username" value={username} handler={inputHandler}/>
        <InputField type="password" name="password" value={password} handler={inputHandler}/>
        <div className="submit-div"> <Link to="/signup" className="signup">Sign Up</Link> <LoginButton handler={submitHandler}/></div>
    </div>
) 

export default LoginPanel;