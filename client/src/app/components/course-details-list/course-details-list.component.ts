import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from 'src/app/services/course-details.service';

@Component({
  selector: 'app-course-details-list',
  templateUrl: './course-details-list.component.html',
  styleUrls: ['./course-details-list.component.css']
})
export class CourseDetailsListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  courseDetails : any = [];
  id : any;
  constructor(private courseDetailService : CourseDetailsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getListCourseDetails(this.id);
  }
  
  getListCourseDetails(id : string) : void {
    this.courseDetailService.getCourseDetails(id).subscribe(
      res => {
        console.log("ID: " + id)
        console.log(res)
        this.courseDetails = res
      },
      err => console.error(err)
    );
  }

  deleteCourse(id : string){
    console.log(id);
    this.courseDetailService.deleteCourseDetail(id).subscribe(
      res =>{
        console.log(res)
        this.getListCourseDetails(id);
      },
      err => console.log(err)
    );
  }
}
