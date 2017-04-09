import { fork } from 'redux-saga/effects';
import * as watch from './watchers'
export default function* startWatchers() {
    yield [
        fork(watch.login),
        fork(watch.categoryList),
        fork(watch.categoryChannels),
        fork(watch.channelStream)
    ]
}