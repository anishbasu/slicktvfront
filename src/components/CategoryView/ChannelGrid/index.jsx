import React from 'react';
import Channel from './Channel';
import './style.css';

const Grid = ({loaded, channels}) => {

    if(loaded){
    	return <div className="channel-grid">
    			{
    				channels.map(
    					(channel, idx) => <Channel data={channel} key={idx}/>
    				)
    			}
    		   </div>
    } else {
        return <div className="channel-grid--loading"> <h2>Loading Channels. Please Wait.</h2> </div>
    }
}

export default Grid;