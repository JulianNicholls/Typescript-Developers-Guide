import { combineReducers } from 'redux';
import { tasksReducer } from './tasks';

export const reducers = combineReducers({
  tasks: tasksReducer
});
