import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { StudentsService } from '../../service/students.service'


@Component({
  selector: 'app-registration-student',
  templateUrl: './registration-student.component.html',
  styleUrls: ['./registration-student.component.css']
})
export class RegistrationStudentComponent {

  message:boolean=false;

  constructor(private student: StudentsService) { }
 
  registerStudent = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
    }
  )
    register()
    {
      // console.log(this.registerStudent.value);
      // this.message = true;
      this.student.saveStudentData(this.registerStudent.value).subscribe((result) => {
        console.log(result);
        this.message = true;
        this.registerStudent.reset({});
      });
  
      }

      removeMessage()
      {
        this.message = false;
      }
    
}
 


