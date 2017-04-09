import {combineReducers} from 'redux'
import user from './user'
import categories from './categories'
import stream from './stream'
const reducers = combineReducers({
    user,
    categories,
    stream
})

export default reducers;