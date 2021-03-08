import { createStore, combineReducers } from 'redux';
import listReducer from './listReducer';

const rootReducer = combineReducers({
  listReducer: listReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;