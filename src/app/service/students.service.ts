import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url = 'http://localhost:3000/students'
  registerUrl:string="http://localhost:3000/register";

  constructor(private http : HttpClient) { }
  getAllStudent()
  {
    return this.http.get(this.url);
  }
  saveStudentData(data : any)
  {
    console.log(data);
    return this.http.post(this.url,data);
  };
  deleteStudent (id : any)
  {
    return this.http.delete(`${this.url}/${id}`)
  };
  getStudentById (id : any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateStudentData (id : any, data : any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  login(){
    return this.http.get(this.registerUrl);
   }
  register(data:any){
    return this.http.post(this.registerUrl,data)
 }

}
