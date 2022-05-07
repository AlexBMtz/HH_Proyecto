import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseDetail } from '../models/CourseDetail';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor(private http : HttpClient) { }

  getCourseDetails(id : string){
    return this.http.get("http://localhost:5000/api/courseDetails/Course/" + id);
  }

  getAllCourseDetails(){
    return this.http.get("http://localhost:5000/api/courseDetails/");
  }

  getCourseDetail(id : string){
    return this.http.get("http://localhost:5000/api/courseDetails/" + id);
  }

  createCourseDetail(courseDetail : CourseDetail){
    return this.http.post("http://localhost:5000/api/courseDetails", courseDetail);
  }

  deleteCourseDetail(id : string){
    return this.http.delete("http://localhost:5000/api/courseDetails/" + id);
  }

  updateCourseDetail(id : string | number, courseDetail : CourseDetail) : Observable<CourseDetail>{
    return this.http.put("http://localhost:5000/api/courseDetails/" + id, courseDetail);
  }
}
