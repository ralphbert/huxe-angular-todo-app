import { Component } from '@angular/core';
import { TodoItem } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: TodoItem[] = [{
    id: 1,
    title: 'Do the laundry',
    done: true,
  }, {
    id: 2,
    title: 'Watch GoT season 8',
    done: false,
  }, {
    id: 3,
    title: 'Call mum',
    done: false,
  }];

  toggle(todo: TodoItem) {
    todo.done = !todo.done;
  }

  trackByFn(todo: TodoItem) {
    return todo.id;
  }
}
