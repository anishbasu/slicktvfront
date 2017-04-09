import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import saga from './sagas'
import InitialState from './initial'

const configure = () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return {
        ...createStore(reducer,
           InitialState,
           composeEnhancers(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run(saga)
    }
}
export default configure;