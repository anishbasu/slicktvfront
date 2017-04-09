import React from 'react';
import './style.css';

import {Link} from 'react-router-dom';
const Logo = () => {
	return <Link to="/" className="logoLink"><h1 className="logo"><span>slick</span>tv</h1></Link>
}

export default Logo;