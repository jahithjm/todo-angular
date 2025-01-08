import { Injectable, signal } from '@angular/core';
import { Todo } from '../interface/todo';
import { filter } from '../interface/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosig=signal<Todo[]>([]);
  filterSingal=signal<filter>(filter.all);

  addTodo(text:string):void {
    const newTodo:Todo = {
      text,
      isCompleted: false,
      id:Math.random().toString(16)
    };
    this.todosig.update(todos=>[...todos, newTodo]);
  }
}
