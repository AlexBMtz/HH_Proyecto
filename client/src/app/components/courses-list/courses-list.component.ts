import { Component, HostBinding, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @HostBinding('class') classes='row';

  courses:any=[];

  constructor(private coursesService:CoursesService) { 
  }

  ngOnInit(): void {
    this.listCourses();
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

