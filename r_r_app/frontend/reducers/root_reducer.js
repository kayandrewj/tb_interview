import { combineReducers } from 'redux';
import MainReducer from './main_reducer';

const RootReducer = combineReducers({
  main: MainReducer,
});

export default RootReducer;
