import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @HostBinding('class') classes='row';

  courses:any=[];

  constructor(private coursesService:CoursesService, private router : Router,
    private loginService : LoginService) { 
  }

  ngOnInit(): void {
    var role = this.loginService.getCookie()
    if(role == '3' || role == '2'){
      this.listCourses();
    }
    else{
      alert("No tienes permisos para acceder a este apartado.")
      this.router.navigate(['/'])
    }
  }

  listCourses(){
    this.coursesService.getCourses().subscribe(
      res => {
        console.log(res);
        this.courses=res
      },
      err => console.error(err)
    );
  }

  deleteCourse(crn:string)
  {
    this.coursesService.deleteCourse(crn).subscribe
    (
      res =>
      {
        console.log(res);
        this.listCourses();
      },
      err => console.error(err)
    );
  }

}

