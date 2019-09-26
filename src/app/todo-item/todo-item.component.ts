import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, OnChanges, DoCheck, IterableDiffers } from '@angular/core';
import { TodoModel, Status } from '../shared/TodoModel';
import { ColoumnHeaderModel } from '../shared/coloumn-model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, DoCheck {

  @Input() todoItems: TodoModel[];
  @Input() coloumnArray: ColoumnHeaderModel[];
  @Output() onProductSelected: EventEmitter<TodoModel>;
  statusColor: string;
  openDelay: number = 100;
  closeDelay: number = 200;
  ascendingOrder: boolean = false;
  iterableDiffer: any;
  localCopyTodoItems: TodoModel[];
  closeResult: string;
  constructor(private _iterableDiffers: IterableDiffers,private modalService: NgbModal) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    this.coloumnArray = this.getColoumnArray();
    this.onProductSelected = new EventEmitter();
  }
  ngOnInit() {
    this.localCopyTodoItems = Object.assign([], this.todoItems);
  }
//implement this to detect any changes in the passed array from the parent component
  ngDoCheck(): void {
    let changes = this.iterableDiffer.diff(this.todoItems);
    if (changes) {
      this.localCopyTodoItems = this.todoItems;
    }
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

    if (value == SortBy.Ascending) {
      this.sortByAscendingDate();
      return;
    }
    if (value == SortBy.Descending) {
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result.description}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

export enum SortBy {
  Ascending = "Ascending",
  Descending = "Descending"
}

