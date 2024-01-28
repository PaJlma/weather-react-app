
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducer';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    root: reducer,
});

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), composeWithDevTools()));

sagaMiddleware.run(rootSaga);

export default store;