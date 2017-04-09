import {CATEGORY_LIST_RECEIVED, CATEGORY_CHANNEL_LIST_RECEIVED} from '../constants'
import InitialState from '../initial'

const categoryDict = (categoryList) => {
    let categories = {}
    categoryList.forEach((name) => categories[name] = {loaded: false, channels: []})
    return categories
}

export default (state = InitialState.categories, action) => {
    switch (action.type) {
        case CATEGORY_LIST_RECEIVED:
            return categoryDict(action.categories)
        case CATEGORY_CHANNEL_LIST_RECEIVED:
            return {...state,[action.category]: {loaded: true, channels: action.channels}}
        default:
            return state
    }
}