import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
const Channel = ({data}) => (
		<Link to={`/player/${data.channel_name}`}>
		    <div className="channel">
					<img className="chan-img" src={data.channel_image}/>
					<h5>{data.channel_name}</h5>
			</div>
		</Link>
)

export default Channel;