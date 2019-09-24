import { Component, OnInit } from '@angular/core';
import { TodoModel, Status } from '../shared/TodoModel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  TodoModel: TodoModel[];
  constructor() { this.loadToDoItem();}

  ngOnInit() {
    
  }

  loadToDoItem(): void {
    let date = new Date();
    let tomorrow=new Date();
    tomorrow.setDate(date.getDate()+1);
    let dayAfterTomorrow=new Date();
    dayAfterTomorrow.setDate(date.getDate()+2)
    this.TodoModel = [new TodoModel(1, 'If you are looking for angular app', date
      , Status.Active),
      new TodoModel(2, 'Fork the repo on github just type github/izrake and search for TodoApplication', date
      , Status.Completed),
      new TodoModel(3, 'I hope you will find the code little intersting', dayAfterTomorrow
      , Status.Deleted),
      new TodoModel(4, 'Thank you for waiting so long', tomorrow
      , Status.NotStarted),
      new TodoModel(5, 'I will be adding many features of angular dont forget to follow', date
      , Status.NotStarted)
    ];
    console.log(this.TodoModel);
  }

  onproductselected(todoItem:TodoModel):void{
    //perform routing here after reveiving the todoItem
    console.log(todoItem)
  }
}
