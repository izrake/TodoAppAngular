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
    this.TodoModel = [new TodoModel(1, 'This is for insta', date
      , Status.Active),
      new TodoModel(2, 'This is for fb', date
      , Status.Completed),
      new TodoModel(3, 'This is for tiktok', dayAfterTomorrow
      , Status.Deleted),
      new TodoModel(4, 'This is for me', tomorrow
      , Status.NotStarted)
    ];
    console.log(this.TodoModel);
  }

  onproductselected(todoItem:TodoModel):void{
    //perform routing here after reveiving the todoItem
    console.log(todoItem)
  }

  

}
