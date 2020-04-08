import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../lib/todo-item.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input() item: TodoItem | null = null;
  @Output() deleteClicked = new EventEmitter<TodoItem>();
  @Output() doneStateChanged = new EventEmitter<boolean>();

  onDelete() {
    this.deleteClicked.emit(this.item);
  }

  onToggle() {
    this.doneStateChanged.emit(!this.item.done);
  }
}
