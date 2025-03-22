import { Component } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent {

  message:boolean=false;
  errorValue : boolean = false;
 
  loginStudent = new FormGroup(
    {
      name: new FormControl('',Validators.required),
      email: new FormControl(''),
    }
  )
    login()
    {
      
      console.log(this.loginStudent.value);
      this.message = true;
      }

      removeMessage()
      {
        this.message = false;
      }

}
