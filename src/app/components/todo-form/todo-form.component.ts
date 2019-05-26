import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  public loading = false;

  constructor(private todoService: TodoService) {
  }

  onAdd(input: any) {
    console.log(input);
    const value = input.value;
    this.loading = true;

    this.todoService.add(value).subscribe(todo => {
      console.log('done', todo);
      input.value = '';
    }, error => {
      console.log(error);
    }, () => {
      input.focus();
      this.loading = false;
    });
  }
}
