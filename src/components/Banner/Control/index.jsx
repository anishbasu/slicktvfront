import React from 'react';
import format from 'date-fns/format';
import isBefore from 'date-fns/is_before';
import isToday from 'date-fns/is_today';
import differenceInHours from 'date-fns/difference_in_hours';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Live from '../LiveBtn';
import classnames from 'classnames';
import './style.css';

const formatTime = (time) => {
	if(isToday(time)){
		return format(time, 'HH:mm')
	}else{
		return format(time, 'M/D HH:mm')
	}
}

const Control = ({element, curTime, handleSelect, index, selectedEvent}) => {
	var time = formatTime(element.startTime) + " - " + formatTime(element.endTime);
	var displayETA = Math.abs(differenceInHours(curTime, element.startTime)) <= 2 && isBefore(curTime, element.startTime);
	if(isBefore(curTime, element.endTime)){
		return <li className={classnames("control", {selected: index == selectedEvent })} onClick={e => handleSelect(index)}>
				<div>
					<h3>{element.title}</h3>
					{time} 
					{	
						displayETA &&
						<span className="starts-in"> (starts in {distanceInWordsToNow(element.startTime, {includeSeconds: true})}) </span>
					}
				</div>
				<Live now={curTime} start={element.startTime} end={element.endTime}/>
		   </li>
	} else {
		return null;
	}
}



export default Control;