import React from 'react'
import HLS from 'hls.js'
import classnames from 'classnames'
import './style.css'

class StreamPlayer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            playerID: Date.now()
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

    _initPlayer = () => {
        if (this.hlsDecoder) {
            this.hlsDecoder.destroy()
        }

        let { url, autoplay, hlsConfig } = this.props
        let { player: playerElem }  = this.refs

        let hlsDecoder = new HLS(hlsConfig)

        hlsDecoder.loadSource(url)
        hlsDecoder.attachMedia(playerElem)

        hlsDecoder.on(HLS.Events.MANIFEST_PARSED, () => {
            if (autoplay) {
                playerElem.play()
            }
        })

        hlsDecoder.on(HLS.Events.ERROR, (event, data) => {
            let {type: errorType, fatal: errorFatal, details: errorDetail} = data
            console.log(`${errorType} Details: ${errorDetail} Fatal? ${errorFatal}`)
        })

        this.hlsDecoder = hlsDecoder
    }

    toggleFullScreen = (elem) => {
        if (!document.mozFullScreen && !document.webkitFullScreen) {
          if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
          if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else {
            document.webkitCancelFullScreen();
          }
        }
    }

    render = () => (
        <div key={this.state.playerID} className="stream-player">
            <video ref="player"
                   className={classnames("stream-player--video")}
                   id={`stream-player-${this.state.playerID}`}
                   controls={this.props.controls}
                   onDoubleClick={event => this.toggleFullScreen(event.target) }></video>
            <div className="stream-player--controls"></div>
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