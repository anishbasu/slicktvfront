import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Dropdown = ({actions}) => (
	<ul className="dropdown">
		{ 
			actions.map(
				(action, idx) => <li key={idx}><Link to={action.ref}>{action.name}</Link></li>
			)
		}
	</ul>
)

export default Dropdown;