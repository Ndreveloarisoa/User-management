import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-service.service';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const route : Routes =[
  { path : 'users', component : UserListComponent},
  { path : '', component : UserListComponent, pathMatch : "full"},
  { path: 'add-user', component : AddUserComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
