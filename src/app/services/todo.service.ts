import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnDestroy {
  private nextId = 1;
  private todos: TodoModel[] = [];
  private todoSubject$ = new BehaviorSubject<TodoModel[]>([]);
  public todos$ = this.todoSubject$.asObservable();

  constructor() {
  }

  ngOnDestroy(): void {
    this.todoSubject$.complete();
  }

  add(title: string, done: boolean = false): Observable<TodoModel> {
    return new Observable(observer => {
      const todo = new TodoModel();
      todo.title = title;
      todo.done = done;
      todo.id = this.nextId;
      this.nextId += 1;
      this.todos.push(todo);
      observer.next(todo);
      observer.complete();
      this.todoSubject$.next(this.todos);
    });
  }

  toggle(todo: TodoModel) {
    return new Observable(observer => {
      const newTodo = todo.clone();
      newTodo.done = !newTodo.done;

      this.todos = this.todos.map(currentTodo => {
        if (currentTodo.id === newTodo.id) {
          return newTodo;
        } else {
          return currentTodo;
        }
      });

      this.todoSubject$.next(this.todos);
      observer.next(todo);
      observer.complete();
    });
  }
}
