import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

export interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @HostBinding('class') hostClass = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
  @Input() todo: TodoItem;
  @Output() todoClick = new EventEmitter();

  @HostListener('click') onClick() {
    this.todoClick.emit();
  }
}
