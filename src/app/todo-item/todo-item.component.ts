import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel, Status } from '../shared/TodoModel';
import { ColoumnHeaderModel } from '../shared/coloumn-model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItems: TodoModel[];
  @Input() coloumnArray: ColoumnHeaderModel[];
  @Output() onProductSelected: EventEmitter<TodoModel>;
  statusColor: string;
  openDelay: number = 100;
  closeDelay: number = 200;
  ascendingOrder: boolean = false;
  localCopyTodoItems: TodoModel[];
  constructor() {
    this.coloumnArray = this.getColoumnArray();
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
    this.localCopyTodoItems = Object.assign([], this.todoItems);
  }


  private sortByAscendingDate(): boolean {
    this.localCopyTodoItems.sort((a: TodoModel, b: TodoModel) => {
      return this.getTime(a.CreationDate) - this.getTime(b.CreationDate);
    });
    return false;
  }

  private sortByDescendingOrder(): boolean {
    this.localCopyTodoItems.sort((a: TodoModel, b: TodoModel) => {
      return this.getTime(b.CreationDate) - this.getTime(a.CreationDate);
    });
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

  private getColoumnArray(): Array<ColoumnHeaderModel> {
    let coloumnArray = new Array<ColoumnHeaderModel>();
    coloumnArray.push(new ColoumnHeaderModel("Description", 1),
      new ColoumnHeaderModel("CreationDate", 2, true, ["Ascending", "Descending"]),
      new ColoumnHeaderModel("Status", 3, true, [Status.Reset, Status.NotStarted,
      Status.Completed, Status.Deleted, Status.Active
      ]),
      new ColoumnHeaderModel("Action", 4)
    );
    return coloumnArray;
  }

  OnDropDownSelected(value: string): boolean {

    if (value == SortBy.Ascending ) {
      this.sortByAscendingDate();
      return;
    }
    if (value == SortBy.Descending ) {
      this.sortByDescendingOrder();
      return;
    }
    if (value !== Status.Reset) {
      this.localCopyTodoItems = Object.assign([], this.todoItems);
      this.localCopyTodoItems = this.localCopyTodoItems.filter(function (item) {
        if (item.Status == value) {
          return item;
        }
      });
    }
    else {
      this.localCopyTodoItems = this.todoItems;
    }

    return false;
  }


}

export enum SortBy {
  Ascending = "Ascending",
  Descending = "Descending"
}

