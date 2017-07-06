import React from 'react'
import HLS from 'hls.js'
import classnames from 'classnames'
import './style.css'

import fullscreenIcon from './full-screen-icon.png'

class StreamPlayer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            playerID: Date.now(),
            videoLoaded: false
        }

        //this.handleError = this.handleError.bind(this)
        this.toggleFullScreen = this.toggleFullScreen.bind(this)
    }

    componentDidUpdate = () => {
        this._initPlayer()
    }

    componentDidMount = () => {
        this._initPlayer()
    }

    componentWillUnmount = () => {
        if (this.hlsDecoder) {
            this.hlsDecoder.destroy()
        }
    }

    _initPlayer = () => {
        if (this.hlsDecoder) {
            this.hlsDecoder.destroy()
        }

        let { url, autoplay, hlsConfig } = this.props
        let { player: playerElem }  = this.refs

        let hlsDecoder = new HLS(hlsConfig)

        hlsDecoder.loadSource(url)
        hlsDecoder.attachMedia(playerElem)

        hlsDecoder.on(HLS.Events.ERROR, (event, data) => {
            let {type: errorType, fatal: errorFatal, details: errorDetail} = data
            console.log(`${errorType} Details: ${errorDetail} Fatal? ${errorFatal}`)
        })

        hlsDecoder.on(HLS.Events.FRAG_PARSED, (event, data) => {
            if(!this.state.videoLoaded){
                this.setState((prevState) => ({...prevState, videoLoaded: true}))
                playerElem.play()
            }
        })

        this.hlsDecoder = hlsDecoder
    }

    toggleFullScreen = (elem) => {
        elem.requestFullScreen =
            elem.requestFullscreen
            || elem.msRequestFullscreen
            || elem.mozRequestFullScreen
            || elem.webkitRequestFullscreen;
        document.exitFullscreen =
            document.exitFullscreen
            || document.msExitFullscreen
            || document.mozCancelFullScreen
            || document.webkitExitFullscreen;
        const fullscreenElement =
            document.fullscreenElement
            || document.msFullscreenElement
            || document.mozFullScreenElement
            || document.webkitFullscreenElement;
        if (fullscreenElement === elem) {
            document.exitFullscreen();
        } else {
            elem.requestFullScreen();
        }
    }

    isStreamLoaded = () => {
        if(this.state.videoLoaded)
            return "Live Broadcast"
        else
            return "Loading..."
    }
    render = () => (
        <div key={this.state.playerID} className="stream-player" ref="playercomp">
            <video ref="player"
                   className={classnames("stream-player--video")}
                   id={`stream-player-${this.state.playerID}`}
                   controls={this.props.controls}
                   onDoubleClick={event => this.toggleFullScreen(this.refs.playercomp) }></video>
            <div className="stream-player--controls">
                <div className="video-controls--left">
                    {this.isStreamLoaded()}
                </div>
                <div className="video-controls--right">
                    <a onClick={event => this.toggleFullScreen(this.refs.playercomp)}>
                        <img src={fullscreenIcon} width="20px"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

StreamPlayer.propTypes = {
    url : React.PropTypes.string.isRequired,
    autoplay : React.PropTypes.bool,
    hlsConfig : React.PropTypes.object, //https://github.com/dailymotion/hls.js/blob/master/API.md#fine-tuning
    controls : React.PropTypes.bool
}

StreamPlayer.defaultProps = {
    autoplay : false,
    hlsConfig : {},
    controls : false
}

export default StreamPlayer;