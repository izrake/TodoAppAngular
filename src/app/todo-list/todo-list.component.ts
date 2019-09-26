import { Component, OnInit } from '@angular/core';
import { TodoModel, Status } from '../shared/TodoModel';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  TodoModel: TodoModel[];
  id:number=5;
  constructor(private services:TodoDataService) { }

  ngOnInit() {
    this.services.getTodoData().subscribe(todoList=> this.TodoModel=todoList)
  }
  onproductselected(todoItem:TodoModel):void{
    //perform routing here after reveiving the todoItem
    console.log(todoItem)
  }

  OnModalSavedClicked(obj){
    console.log(obj.description);
    let date = new Date();
    this.services.saveToDoData(new TodoModel(this.id++,obj.description,date,Status.NotStarted));
  }
}
