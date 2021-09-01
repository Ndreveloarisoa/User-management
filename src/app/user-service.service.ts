import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from './user-model.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users :  Array<UserModel> = [   
    new UserModel('1','Niriantsoa','Hanta','hanta@mg.com'),
    new UserModel ( '2','Andriamiarinarivo', 'Harena', 'harena@mg.com'),
    new UserModel('3', 'Rasoamanana', 'Olga', 'rasoa@mg.com'),
    new UserModel('4', 'Hantariamalala', 'Nantenaina', 'naina@gmail.com')
  ]
  
  private UserSubject : BehaviorSubject<any> = new BehaviorSubject(this.users)
  
getUser(){
  return this.UserSubject.asObservable()
}

addUser( user : UserModel){
   this.users.push(user)
  this.UserSubject.next(this.users)
  
}
deleteUser( user : UserModel){
  this.users = this.users.filter( x => x.id != user.id)
  this.UserSubject.next(this.users)
}
}
