import {LOGIN_REQUEST, CATEGORY_LIST, CATEGORY_CHANNEL_LIST, CHANNEL_STREAM_REQUEST, USER_DETAILS_REQUEST, EVENTS_REQUEST} from '../constants'
import {loginSaga, getCategories, getChannelsByCategory, getChannelStream, userDetailsSaga, eventsWorker} from './workers'
import { takeLatest } from 'redux-saga/effects';

export function* login() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export function* categoryList(){
    yield takeLatest(CATEGORY_LIST, getCategories);
}

export function* categoryChannels(){
    yield takeLatest(CATEGORY_CHANNEL_LIST, getChannelsByCategory);
}

export function* channelStream(){
    yield takeLatest(CHANNEL_STREAM_REQUEST, getChannelStream);
}

export function* userDetails(){
    yield takeLatest(USER_DETAILS_REQUEST, userDetailsSaga);
}

export function* events(){
    yield takeLatest(EVENTS_REQUEST, eventsWorker);
}