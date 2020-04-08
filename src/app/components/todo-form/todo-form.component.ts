import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent {
  @Output() addTodo = new EventEmitter<string>();
  @ViewChild('titleInput') input: ElementRef;
  title = '';

  onSubmit() {
    if (this.title) {
      this.addTodo.emit(this.title);
      this.title = '';
      this.input.nativeElement.focus();
    }
  }
}
