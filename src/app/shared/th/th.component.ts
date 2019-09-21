import { Component, OnInit, Input } from '@angular/core';
import { ColoumnModel } from '../coloumn-model';

@Component({
  selector: 'app-th',
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.css']
})
export class ThComponent implements OnInit {
@Input() coloumnModel:ColoumnModel
  constructor() { 
  }

  ngOnInit() {
    console.log(this.coloumnModel);
  }

}
