import React from 'react';
import { connect } from 'react-redux';
import { Task, fetchTasks, deleteTask, DeleteTaskAction } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  tasks: Task[];
  fetchTasks(): Promise<void>;
  deleteTask(id: number): DeleteTaskAction;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  fetch = (): void => {
    this.setState({ fetching: true });
    this.props.fetchTasks();
  };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.tasks?.length && this.props.tasks?.length) {
      this.setState({ fetching: false });
    }
  }

  renderList = (): JSX.Element[] => {
    return this.props.tasks.map((task: Task) => {
      return (
        <div
          className="task"
          key={task.id}
          onClick={() => this.props.deleteTask(task.id)}
        >
          {task.title}
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <button onClick={this.fetch}>Fetch!</button>
        {this.state.fetching ? 'LOADING' : null}
        <div className="tasks">{this.renderList()}</div>
      </>
    );
  }
}

const mapStateToProps = ({ tasks }: StoreState): { tasks: Task[] } => {
  return { tasks };
};

export default connect(mapStateToProps, { fetchTasks, deleteTask })(_App);
