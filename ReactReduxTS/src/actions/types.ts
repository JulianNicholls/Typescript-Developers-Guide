import { FetchTasksAction, DeleteTaskAction } from './tasks';

export enum ActionTypes {
  FETCH_TASKS,
  DELETE_TASK
}

export type Action = FetchTasksAction | DeleteTaskAction;
