import { Injectable } from '@angular/core';
import { TodoModel, Status } from './shared/TodoModel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  static TodoModel: TodoModel[]=[null];

  constructor() { }

  public getTodoData():Observable<TodoModel[]>{
  return of(this.loadToDoItem())
  }

  public saveToDoData(value:TodoModel){
    TodoDataService.TodoModel.push(value);
  }

  loadToDoItem(): TodoModel[] {
    if(TodoDataService.TodoModel.length<=1){
      let date = new Date();
      let tomorrow=new Date();
      tomorrow.setDate(date.getDate()+1);
      let dayAfterTomorrow=new Date();
      dayAfterTomorrow.setDate(date.getDate()+2)
      TodoDataService.TodoModel = [new TodoModel(1, 'If you are looking for angular app', date
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
    }
    
    return TodoDataService.TodoModel;
  }
}
