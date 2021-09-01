import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../user-model.service';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

Uform : FormGroup

constructor( private formBuilder : FormBuilder,
               private userService : UserService,
               private router : Router) { }

  ngOnInit() {
    this.Uform = this.formBuilder.group(
     { id : [0],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required, Validators.email]
     })
  }
  onSubmitForm(){
    const formValue = this.Uform.value
    console.log(formValue)
    const newUser = new UserModel(
      formValue['id'],
      formValue['firstName'],
      formValue['lastName'],
      formValue['email']
    )
    this.userService.addUser(newUser);
    this.router.navigate(['/users'])
  }
  add_User(){
    this.userService.addUser(this.Uform.getRawValue())
    this.router.navigate(['/users'])
  }

}
