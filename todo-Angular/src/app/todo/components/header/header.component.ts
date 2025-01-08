import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  todoService=inject(TodoService);
  text:string = '';
  changeText(event: Event):void{

    const target = event.target as HTMLInputElement;
    this.text=target.value;
  }

  addTodo():void {

    this.todoService.addTodo(this.text);
    this.text = '';
  }
}
