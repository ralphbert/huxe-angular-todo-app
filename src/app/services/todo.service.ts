import { Injectable } from '@angular/core';
import { TodoItems } from '../lib/todo-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoId = 0;
  private todoList: TodoItems = [];

  constructor() {
    this.add('Buy some milk');
    this.add('Learn some frontend stuff');
    this.add('Check Flux capacitor');
  }

  get todos() {
    return this.todoList;
  }

  add(title: string) {
    if (title) {
      const newTodo = {
        id: this.todoId,
        title,
        done: false,
      };
      this.todoList = [...this.todoList, newTodo];
      this.todoId += 1;
    }
  }

  remove(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }

  update(id: number, done: boolean = true) {
    this.todoList = this.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done,
        };
      }

      return todo;
    });
  }
}
