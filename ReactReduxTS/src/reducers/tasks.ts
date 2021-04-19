import { Task, ActionTypes, Action } from '../actions';

export const tasksReducer = (state: Task[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASKS:
      return action.tasks;

    case ActionTypes.DELETE_TASK:
      return state.filter((task: Task) => task.id !== action.task);

    default:
      return state;
  }
};
