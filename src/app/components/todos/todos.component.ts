import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  onAdd(title: string) {
    this.todoService.add(title);
  }
}
