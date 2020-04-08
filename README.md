# Huxe Angular Todo App

This is a example application of a todo app.

## Setup

```
npm install
ng serve
```

## About

All components that make up the todo list itself are so called `pure components`.
They don't have a internal state but receive inputs and have outputs. Also, the change detection is set to `OnPush`. That means that
they will only rerender themselves if a input changes or a event (like a click or input) is triggered.

Only the `todos.component.ts` has all the logic in it to wire everything up correctly. Such a component is called `higher order component`.

The `todo.service.ts` is a immutable service: 
After every operation it create a new list of `todos` or event new `todo` objects (see `update` method). This prevents rendering issues when working 
with the `OnPush` change detection strategy.

