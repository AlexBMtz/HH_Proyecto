import { Component, HostBinding, OnInit } from '@angular/core';
import {TeachersService} from '../../services/teachers.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  @HostBinding('class') classes='row';
  
  teachers:any=[];
  constructor(private teacherService:TeachersService) 
  { 

  }

  ngOnInit(): void 
  {
    this.listTeachers();
  }

  listTeachers(){
    this.teacherService.getTeachers().subscribe(
      res => this.teachers=res,
      err => console.error(err)
    );
  }

  deleteTeacher(teacherId:string)
  {
    this.teacherService.deleteTeacher(teacherId).subscribe
    (
      res =>
      {
        console.log(res);
        this.listTeachers();
      },
      err => console.error(err)
    );
  }
  
}
