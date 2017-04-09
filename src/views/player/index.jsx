import React from 'react';
import StreamPlayer from '../../components/StreamPlayer';
import {requestChannelStream} from '../../store/actions';
import {connect} from 'react-redux';
import './style.css';

class Player extends React.Component{
 componentWillMount = () => {
    this.props.dispatch(requestChannelStream(this.props.match.params.channel))
 }
 render = () => (
	<article className="player">
		<div className="channelPage">
        {   this.props.stream &&
			<StreamPlayer url={this.props.stream} autoplay={true}/>
        }
		</div>
	</article>
    )
}


const mapStateToProps = ({stream}) => ({stream})
export default connect(mapStateToProps)(Player);