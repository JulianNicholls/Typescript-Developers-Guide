import { combineReducers } from 'redux';
import { Task } from '../actions';
import { tasksReducer } from './tasks';

export interface StoreState {
  tasks: Task[];
}

export const reducers = combineReducers<StoreState>({
  tasks: tasksReducer
});
