import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from 'src/app/services/course-details.service';
import { StudentsService } from 'src/app/services/students.service';
import { CourseDetail } from 'src/app/models/CourseDetail';

@Component({
  selector: 'app-course-details-form',
  templateUrl: './course-details-form.component.html',
  styleUrls: ['./course-details-form.component.css']
})
export class CourseDetailsFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  courseDetail : CourseDetail = {
    studentId : '',
    courseId : '',
    WQ_1 : 0,
    WQ_2 : 0,
    WQ_3 : 0,
    OQ_1 : 0,
    OQ_2 : 0,
    OQ_3 : 0,
    CP_1 : 0,
    CP_2 : 0,
    CP_3 : 0,
    final_Project : 0,
    final_Grade : 0,
  };

  students : any = [];
  edit : boolean = false;
  crn : any = null;
  detailId : any = null;

  constructor(private courseDetailService : CourseDetailsService, private studentService : StudentsService, private router : Router, private route : ActivatedRoute) {
     }

  ngOnInit(): void {
    const params = this.route.snapshot.params
    console.log(params)

    this.crn = params['crn'];
    this.detailId = params['detailId'];
    console.log(this.crn);
    console.log(this.detailId);

    if(this.detailId != undefined){
      this.courseDetailService.getCourseDetail(this.detailId).subscribe(
        res => {
          console.log(res);
          this.courseDetail = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }

    this.fillStudents()
  }

  saveNewCourseDetail() {
    delete this.courseDetail.final_Grade;
    this.courseDetail.courseId = this.crn;

    console.log(this.courseDetail);
    this.courseDetailService.createCourseDetail(this.courseDetail).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/CourseDetails', this.crn]);
      },
      err => console.error(err)
    );
  }

  updateCourseDetail(){
    this.courseDetail.final_Grade = ((this.courseDetail.WQ_1! + this.courseDetail.WQ_2! + this.courseDetail.WQ_3!)/3 + (this.courseDetail.OQ_1! + this.courseDetail.OQ_2! + this.courseDetail.OQ_3!)/3 + (this.courseDetail.CP_1! + this.courseDetail.CP_2! + this.courseDetail.CP_3!)/3 + this.courseDetail.final_Project!) /4;

    this.courseDetailService.updateCourseDetail(this.courseDetail.studentId!, this.courseDetail).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/CourseDetails', this.crn]);
      },
      err => console.error(err)
    );
  }

  fillStudents(){
    this.studentService.getStudents().subscribe(
      res => {
        this.students = res;
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
