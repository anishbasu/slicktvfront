import * as constants from '../constants'
export const loginRequest = (username, password) => ({
    type: constants.LOGIN_REQUEST,
    username,
    password
})
export const loginSuccess = (username, auth_token) => ({
    type: constants.LOGIN_SUCCESS,
    username,
    auth_token
})

export const loginFailed = () => ({
    type: constants.LOGIN_FAILED
})

export const logout = () => ({
    type: constants.LOGOUT
})


export const categoryListRequest = () => ({
    type: constants.CATEGORY_LIST
})

export const categoryListReceived = (categories) => ({
    type: constants.CATEGORY_LIST_RECEIVED,
    categories
})


export const categoryChannelListRequest = (category) => ({
    type: constants.CATEGORY_CHANNEL_LIST,
    category
})

export const categoryChannelListReceived = (category, channels) => ({
    type: constants.CATEGORY_CHANNEL_LIST_RECEIVED,
    category,
    channels
})

export const requestChannelStream = (channel_name) => ({
    type: constants.CHANNEL_STREAM_REQUEST,
    channel_name
})

export const streamReceived = (stream_uri) => ({
    type: constants.CHANNEL_STREAM_RECEIVED,
    stream_uri
})