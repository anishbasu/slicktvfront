import * as api from '../api'
import * as actions from '../actions'
import { call, put, select } from 'redux-saga/effects';

export function* loginSaga({username,password}) {
    try {
        console.log("Logging in user.")
        const resp = yield call(api.login, username, password)
        if(resp.auth_token){
            console.log("User logged in")
            yield put(actions.loginSuccess(username, resp.auth_token))
        } else {
            console.log("Login Unsuccessful")
            yield put(actions.loginFailed()) 
        }
    } catch (error) {
        console.log(error)
    }
}

export function* getCategories () {
    try{
        console.log("Getting Category List")
        let token = yield select((state) => state.user.auth_token)
        let loaded = yield select((state) => Object.keys(state.categories).length !== 0)
        if(!loaded){
            const resp = yield call(api.categoryList, token)
            if(resp.categories){
                console.log("Category List Received")
                yield put(actions.categoryListReceived(resp.categories))
            } else {
                console.log("Category List Receive Error") //TODO Error Handling
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export function* getChannelsByCategory ({category}) {
    try {
        console.log("Getting Channels List")
        let token = yield select((state) => state.user.auth_token)
        let loaded = yield select((state) => state.categories[category].loaded)
        if(!loaded){
            const resp = yield call(api.channelsByCategory,token,category)
            if(resp.channels){
                console.log(`Channels for Category: ${category} received.`)
                yield put(actions.categoryChannelListReceived(resp.category_name, resp.channels))
            } else {
                console.log("Category Channel List Receive Error") //TODO Error Handling
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export function* getChannelStream ({channel_name}) {
    try {
        console.log(`Getting Stream for Channel: ${channel_name}`)
        let token = yield select((state) => state.user.auth_token)

        const resp = yield call(api.channelStream, token, channel_name)
        if(resp.stream_uri){
            console.log(`Stream received for ${channel_name}`)
            yield put(actions.streamReceived(resp.stream_uri))
        } else {
            console.log("Stream receive error"); //TODO Error Handling
        }
    } catch (error) {
        console.log(error)
    }
}
/*
function* userDetailsSaga({username}) => {
    try {
        let user = yield select((state) => state.user)
        console.log("Getting User Details")
        const resp = yield call(api.userDetails(user.auth_token, username))
        if(resp.user_id){
            console.log("User details received")
        }
    }
}
*/