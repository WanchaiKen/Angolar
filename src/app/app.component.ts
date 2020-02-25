import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  isLoading= true;
  todoList: number[] = [];

  imageUrl = 'https://placeimg.com/300/300/animals';
  isActive= true;   // true = green color , false = red colorS
  email: string;
  amount = 123456.7890;

  user = {
    name: 'John snow',
    age: 20,
    isAdmin: false
  };
  today = new Date();
  constructor(
    private todoService: TodoService
  ){
    this.todoList = this.todoService.getTodoList();
   }

  //  onClickOkButton() {
  //   console.log('You have clicked OK!');
  // }

  onClickOkButton(event) {
    console.log(event);
  }
  search(email: string) {
    console.log('search',email);
  }
}

