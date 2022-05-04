import { Component, OnInit,HostBinding } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/Student';
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
@HostBinding ('class') classes = 'row';
student : Student=
{
  studentId:0,
  admissionDate: new Date(),
  userId:0,
};
edit:boolean = false;
  constructor(private studentsService : StudentsService, private router:Router, private activatedRoute: ActivatedRoute) 
  {

  }

  ngOnInit(): void 
  {
    const params = this.activatedRoute.snapshot.params;
    // console.log(params)
     if(params['studentId']) 
     {
       this.studentsService.getStudent(params['studentId']).subscribe
       (
         res => 
         {
           console.log(res); 
           this.student=res;
           this.edit=true;
         },
         err =>console.error(err)
       );
     }
   }

   saveNewStudent()
  {
  
   //console.log(this.student)
  // delete this.student.studentId;
   //delete this.student.admissionDate;
    this.studentsService.saveStudent(this.student).subscribe(
      res => 
      {
        console.log(res); 
      this.router.navigate(['/students'])},
      err =>console.error(err)
      );

  } 

  updateStudent()
  {
   // console.log(this.student);
    this.studentsService.updateStudent(this.student.studentId!,this.student).subscribe
    (
    res => 
    {
      console.log(res); 
    this.router.navigate(['/students'])},
    err =>console.error(err)
    );
    
  }


 }

