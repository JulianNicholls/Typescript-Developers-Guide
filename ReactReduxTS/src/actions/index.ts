import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

const jpUrl = 'https://jsonplaceholder.typicode.com/todos';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
};

export interface FetchTasksAction {
  type: ActionTypes.FETCH_TASKS;
  tasks: Task[];
}

export const fetchTasks = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Task[]>(jpUrl);

    dispatch<FetchTasksAction>({ type: ActionTypes.FETCH_TASKS, tasks: response.data });
  };
};
