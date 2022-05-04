import { Component, OnInit,HostBinding } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  students : any = {};
  roles : any = {};
  constructor(private studentService:StudentsService) { }

  ngOnInit(): void
  {
    this.listStudents();
  }

  listStudents()
  {
    this.studentService.getStudents().subscribe(
      res=> this.students=res,
      err=> console.error(err)
    );
  }

  deleteStudent(studentId:string)
  {
    this.studentService.deleteStudent(studentId).subscribe
    (
      res=> {
        console.log(res)
        this.listStudents()
      },
      err=> console.error(err)
    )
  }

  editStudents(studentId:string)
  {
    console.log (studentId);
  }

}
