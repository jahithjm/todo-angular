import { Injectable, signal } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosig=signal<Todo[]>([]);

  addTodo(text:string):void {
    const newTodo:Todo = {
      text,
      isCompleted: false,
      id:Math.random().toString(16)
    };
    this.todosig.update(todos=>[...todos, newTodo]);
  }
}
