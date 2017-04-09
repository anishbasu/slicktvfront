import React, {Component} from 'react';
import Control from './Control';
import './style.css';

class Banner extends Component {
	constructor(props){
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
		this.updateTime = this.updateTime.bind(this);
	}
	componentWillMount(){
		this.setState(prevState => ({selectedEvent: Object.keys(this.props.elements)[0], currentTime: Date()}));
	}
	componentDidMount(){
		this.interval = setInterval(() => this.updateTime(), 5000);
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	}
	handleSelect(event){
		this.setState(prevState => ({...prevState, selectedEvent: event}));
	}
	updateTime(){
		this.setState(prevState => ({...prevState, currentTime: Date()}));
	}
 	render() {
		return (
			<div className="banner">
				<div className="slide">
					<h2>{this.props.elements[this.state.selectedEvent].title}</h2>
				</div>

				<ul className="controls">
				{
					this.props.elements.map(
						(element, idx) => 
							<Control key={idx} element={element} curTime={this.state.currentTime} index={idx} selectedEvent={this.state.selectedEvent} handleSelect={this.handleSelect}/>
						)
				}
				</ul>
			</div>
		)
	}
}

export default Banner;