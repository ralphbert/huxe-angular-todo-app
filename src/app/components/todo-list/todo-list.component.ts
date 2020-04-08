import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem, TodoItems } from '../../lib/todo-item.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() todos: TodoItems = [];
  @Output() removeItem = new EventEmitter<TodoItem>();
  @Output() toggleItem = new EventEmitter<TodoItem>();

  trackByFn(index: number, todo: TodoItem) {
    return todo.id;
  }
}
