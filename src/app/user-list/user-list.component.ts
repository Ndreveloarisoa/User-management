import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from '../user-model.service';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit , OnDestroy {
  users : UserModel[]
  subscritpion : Subscription

  constructor( private userService : UserService){}
  
  ngOnInit() {
   this.subscritpion = this.userService.getUser().subscribe(
     data => this.users = data
   )
  }
  delete( user : UserModel){
    this.userService.deleteUser(user)
    console.log(user)
  }

  ngOnDestroy(): void {
    this.subscritpion.unsubscribe()
  }
}