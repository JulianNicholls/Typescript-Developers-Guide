import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Task {
  id: number;
  title: string;
  completed: boolean;
};

const logTask = (id: number, title: string, finished: boolean) => {
  console.log(`
  The task with ID ${id}
  has a title of ${title}
  Finished? ${finished}
  `);

}

axios.get(url).then(response => {
  const task = response.data as Task;
  const id = task.id;
  const title = task.title;
  const finished = task.completed;

  logTask(id, title, finished);

});
