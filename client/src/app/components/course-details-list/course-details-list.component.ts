import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailsService } from 'src/app/services/course-details.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-course-details-list',
  templateUrl: './course-details-list.component.html',
  styleUrls: ['./course-details-list.component.css']
})
export class CourseDetailsListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  courseDetails : any = [];
  id : any;
  constructor(private courseDetailService : CourseDetailsService, private route : ActivatedRoute, 
    private router : Router, private loginService : LoginService) { }

  ngOnInit(): void {
    var role = this.loginService.getCookie()
    if(role == '3' || role == '2'){
      this.id = this.route.snapshot.paramMap.get('id')
      this.getListCourseDetails(this.id);
    }
    else{
      alert("No tienes permisos para acceder a este apartado.")
      this.router.navigate(['/'])
    }
    
  }
  
  getListCourseDetails(studentId : string) : void {
    this.courseDetailService.getCourseDetails(studentId).subscribe(
      res => {
        console.log("ID: " + studentId)
        console.log(res)
        this.courseDetails = res
      },
      err => console.error(err)
    );
  }

  deleteCourse(studentId : string){
    console.log(studentId);
    this.courseDetailService.deleteCourseDetail(studentId).subscribe(
      res =>{
        console.log(res)
        window.location.reload();
      },
      err => console.log(err)
    );
  }
}
