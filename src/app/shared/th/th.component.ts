import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ColoumnHeaderModel } from '../coloumn-model';

@Component({
  selector: 'app-th',
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.css']
})
export class ThComponent implements OnInit {
@Input() ColoumnHeaderModel:ColoumnHeaderModel
@Input() thClassList:string[];
@Output() onDropDown:EventEmitter<string>;
  constructor() { 
    this.onDropDown= new EventEmitter();
  }

  ngOnInit() {
    console.log(this.ColoumnHeaderModel);
  }

  onDropDownValueSelected(event:string){
    this.onDropDown.emit(event);
  }

}
