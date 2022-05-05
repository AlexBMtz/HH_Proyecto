import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/Teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private Http:HttpClient) { }

  getTeachers()
  {
    return this.Http.get('http://localhost:5000/api/teachers')
  }

  getTeacher(teacherId:string)
  {
    return this.Http.get('http://localhost:5000/api/teachers/'+teacherId);
  }

  saveTeacher(teacher : Teacher)
   {
    return this.Http.post('http://localhost:5000/api/teachers/',teacher);
   }

   deleteTeacher(teacherId:string)
   {
    return this.Http.delete('http://localhost:5000/api/teachers/'+teacherId);
   }

   updateTeacher(teacherId:string | number, teacher:Teacher):Observable<Teacher>
   {
     return this.Http.put('http://localhost:5000/api/teachers/'+teacherId,teacher);
   }
}
