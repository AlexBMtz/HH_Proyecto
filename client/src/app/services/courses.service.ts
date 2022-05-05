import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private Http:HttpClient) 
  {
    
  }

  getCourses()
  {
    return this.Http.get('http://localhost:5000/api/courses');
  }

  getCourse(crn:string)
  {
    return this.Http.get('http://localhost:5000/api/courses/'+crn);
  }

  saveCourse(course:Course)
  {
    return this.Http.post('http://localhost:5000/api/courses/',course);
  }

  deleteCourse(crn:string)
  {
    return this.Http.delete('http://localhost:5000/api/courses/'+crn);
  }

  updateCourse(crn:string|number, course:Course):Observable<Course>
  {
    return this.Http.put('http://localhost:5000/api/courses/'+crn,course);
  }
}
