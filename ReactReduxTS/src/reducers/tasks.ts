import { Task, FetchTasksAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const tasksReducer = (state: Task[] = [], action: FetchTasksAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASKS:
      return action.tasks;

    default:
      return state;
  }
};
