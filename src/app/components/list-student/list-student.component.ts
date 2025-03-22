import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../service/students.service'

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentData : any;
  constructor(private student : StudentsService ){ }

  ngOnInit(): void {
    this.student.getAllStudent().subscribe((Alldata)=>{
      console.log(Alldata);
      this.studentData = Alldata;
      })
  }

  deleteStudent(student_id :any)
      {
        // console.log(student_id);
        this.student.deleteStudent(student_id).subscribe((result)=>{
          // console.log(result);
          this.ngOnInit();
          
        })
        
      }

}
