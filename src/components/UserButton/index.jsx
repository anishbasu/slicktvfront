import React from 'react';
import Dropdown from './Dropdown';
import defaultUserImage from './user.png';

import './style.css';

const UserButton = ({username, userImage, actions, authenticated}) => {
	if(authenticated){
		return (<div className="user-btn">
				<div className="user-name">
					<div>{username}</div>
					<img src={userImage} alt="user"/>
				</div>
				<Dropdown actions={actions}/>
			</div>);
	}
	else{
		return null;
	}
}

UserButton.propTypes = {
	username: React.PropTypes.string,
	actions: React.PropTypes.array.isRequired
}

UserButton.defaultProps = {
	userImage: defaultUserImage,
	username: "Log In"
}

export default UserButton;