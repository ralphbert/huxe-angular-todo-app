import { Component, OnDestroy } from '@angular/core';
import { TodoModel } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnDestroy {
  todos: TodoModel[] = [];
  onDestroy$ = new Subject<void>();

  constructor(private todoService: TodoService) {
    this.todoService.todos$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  toggle(todo: TodoModel) {
    this.todoService.toggle(todo)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  trackByFn(todo: TodoModel) {
    return todo.id;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
