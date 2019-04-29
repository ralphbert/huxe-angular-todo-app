# Huxe Angular Todo App

This is just a small scaffold to start a simple todo app. Nothing special.

## Your tasks

### Add a Todo model

Currently there is only a interface that adds typing information to the Todos. 

This should change! Add a Todo model. It should have properties for a `title`, a `done` 
flag and an unique `id`.

Add a `setDone` method to toggle the done state. 

### Add a service that manages all your Todos

The service should manage a list of Todo elements. Pick a suitable data structure.
Add a CRUD interface to the service to manipulate the list.

### Use the service in the components

Provide the service at a useful position of your app. What position suites your needs and why?

Inject the service in the list and form component and use it accordingly.

### Additional features

#### Add a new FilterComponent to the list
It should provide a text field which allows to filter the Todo list by a given term. 
Check the Todo models if the title contains that term (case insensitive) and let the 
service filter the Todos. Find a solution to only serve filtered elements by the service to
 your application.

Add a `Hide done` button which hides all done todos from the list.

Add a `Reset` button to reset all filters.
