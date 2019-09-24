import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FabComponent } from './shared/fab/fab.component';
import { ThComponent } from './shared/th/th.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TodoItemComponent,
    TodoListComponent,
    FabComponent,
    ThComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
