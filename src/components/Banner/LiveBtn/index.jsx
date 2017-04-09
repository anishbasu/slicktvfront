import React from 'react';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import './style.css';

const Live = ({now, start, end}) => {
	var isLive = isAfter(now, start) && isBefore(now, end);
	if(isLive){
		return <div className="live">LIVE</div>;
	}
	else{
		return null;
	}
}

export default Live;