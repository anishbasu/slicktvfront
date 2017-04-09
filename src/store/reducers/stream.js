import {CHANNEL_STREAM_RECEIVED} from '../constants'
import InitialState from '../initial'

export default (state = InitialState.stream, action) => {
    switch(action.type){
        case CHANNEL_STREAM_RECEIVED:
            return action.stream_uri
        default:
            return state
    }
}