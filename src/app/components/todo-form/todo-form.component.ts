import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAdd(input: any) {
    event.preventDefault();
    console.log(input);
    const value = input.value;

    // TODO do something with the value
    alert(value);

    input.value = '';
    input.focus();
  }

}
