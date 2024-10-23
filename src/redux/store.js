import { legacy_createStore } from 'redux';
import contactReducer from './contactReducer';

const store = legacy_createStore(
    contactReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;
