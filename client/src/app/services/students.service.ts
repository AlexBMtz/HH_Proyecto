import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) 
  {

  }

  getStudents()
  {
    return this.http.get('http://localhost:5000/api/students');
  }

  getStudent(id:string)
  {
    return this.http.get('http://localhost:5000/api/students/'+id);
  }

  saveStudent(student :Student)
  {
    return this.http.post('http://localhost:5000/api/students/',student);
  }
  deleteStudent(id:string)
  {
    return this.http.delete('http://localhost:5000/api/students/'+id);
  }
    updateStudent(studentId:string | number, student:Student):Observable<Student>
  {
    return this.http.put('http://localhost:5000/api/students/'+studentId,student);
  }
}
