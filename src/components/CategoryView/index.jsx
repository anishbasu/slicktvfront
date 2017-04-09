import React, {Component} from 'react';
import Categories from './Categories';
import ChannelGrid from './ChannelGrid';
import {connect} from 'react-redux';
import {categoryChannelListRequest} from '../../store/actions'
import './style.css';

class CategoryView extends Component {
	constructor(props){
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
	}
	componentWillMount(){
		if(Object.keys(this.props.categories).length !== 0){
			this.setState(prevState => ({...prevState, loaded: true}));
			this.handleSelect(Object.keys(this.props.categories)[0]);
		} else {
			this.setState(prevState => ({loaded: false, selectedCategory: null}));
		}
	}

	componentWillReceiveProps(props){

		if(this.state.loaded === false && props.categories){
			this.setState(prevState => ({...prevState, loaded: true}));
			this.handleSelect(Object.keys(props.categories)[0]);
		}
	}
	handleSelect(category){
		this.props.dispatch(categoryChannelListRequest(category))
		this.setState(prevState => ({...prevState, selectedCategory: category}));
	}
	render(){
		if (this.state.loaded){
		return (
			<div className='category-view'>
				<div className='channels-view'>
					<h3>{this.state.selectedCategory}</h3>
					<ChannelGrid loaded={this.props.categories[this.state.selectedCategory].loaded} channels={this.props.categories[this.state.selectedCategory].channels}/>
				</div>
				<Categories categories={Object.keys(this.props.categories)} handleSelect={this.handleSelect} selectedCategory={this.state.selectedCategory}/>
			</div>
			)
		} else {
			return null;
		}

	}
}

export default connect()(CategoryView);