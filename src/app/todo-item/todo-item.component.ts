import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel, Status } from '../shared/TodoModel';
import { ColoumnModel } from '../shared/coloumn-model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItems: TodoModel[];
  @Input() coloumnArray:ColoumnModel[];
  @Output() onProductSelected: EventEmitter<TodoModel>;
  statusColor: string;
  openDelay: number = 100;
  closeDelay: number = 200;
  ascendingOrder: boolean = false;
  constructor() { 
    this.coloumnArray= this.getColoumnArray();
    this.onProductSelected= new EventEmitter();
  }

  ngOnInit() {
  }


  sortByDate(): boolean {
    if (this.ascendingOrder) {
      this.todoItems.sort((a: TodoModel, b: TodoModel) => {
        return this.getTime(a.CreationDate) - this.getTime(b.CreationDate);
      });
      this.ascendingOrder = false;
    }
    else {
      this.todoItems.sort((a: TodoModel, b: TodoModel) => {
        return this.getTime(b.CreationDate) - this.getTime(a.CreationDate);
      });
      this.ascendingOrder = true;
    }

    return false;
  }

  onTaskSelect(selectedItem: TodoModel): boolean {
    console.log(selectedItem);
    this.onProductSelected.emit(selectedItem);
    return false;
  }

  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }

  private getColoumnArray():Array<ColoumnModel>{
    let coloumnArray= new Array<ColoumnModel>();
    coloumnArray.push(new ColoumnModel("Description",1),
    new ColoumnModel("CreationDate",2),
    new ColoumnModel("Status",3,true,[Status.NotStarted,
    Status.Completed,Status.Deleted,Status.Active
    ]),
    new ColoumnModel("Action",4)
    );
    return coloumnArray;
  }
}

