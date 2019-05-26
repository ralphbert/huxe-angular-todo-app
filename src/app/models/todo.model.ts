export interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

export class TodoModel implements TodoItem {
  id: number;
  title: string;
  done: boolean;

  clone() {
    const todo = new TodoModel();
    todo.id = this.id;
    todo.title = this.title;
    todo.done = this.done;
    return todo;
  }
}
