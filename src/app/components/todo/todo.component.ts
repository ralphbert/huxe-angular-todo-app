import { Component, HostBinding, Input } from '@angular/core';

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
  @Input() todo: TodoItem;
  @HostBinding('class') hostClass = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
}
