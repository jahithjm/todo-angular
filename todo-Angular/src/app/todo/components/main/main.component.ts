import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { filter } from '../../interface/filter.enum';
@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  todoService=inject(TodoService);
  // foo=this.todoService.todosig

  visibleTodos =computed(() =>{
    const todos = this.todoService.todosig();
    const Filter=this.todoService.filterSingal();
    if(Filter === filter.active){
      return todos.filter(todos=>!todos.isCompleted)
    }
    else if(Filter===filter.completed){
      return todos.filter(todos=>todos.isCompleted)
    }
    return todos;
  });
}
