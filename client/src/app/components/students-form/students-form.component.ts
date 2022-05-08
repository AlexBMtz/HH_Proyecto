import { Component, OnInit,HostBinding } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/Student';
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
@HostBinding ('class') classes = 'row';
user:User=
{
  email:'',
  roleId:1,
  password:'12345'

}
student : Student=
{
  studentId:0,
  firstName:'',
  fatherLastName:'',
  motherLastName:'',
  email:'',
  phoneNumber:'',
  photourl:'',
  admissionDate: new Date(),

};
edit:boolean = false;
  constructor(private studentsService : StudentsService,private usersService:UsersService, private router:Router, private activatedRoute: ActivatedRoute) 
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
    delete this.student.studentId;
    this.studentsService.saveStudent(this.student).subscribe(
      res => 
      {
        console.log(this.student); 
        console.log(res);
      },
      err =>console.error(err)
      );

      this.user.email=this.student.email;
      this.usersService.saveUser(this.user).subscribe(res=>{
        console.log(this.student)
        console.log(res);
        this.router.navigate(['/students'])
      },
      err => console.error(err)
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
    this.router.navigate(['/students'])
     },
    err =>console.error(err)
    );
    
  }


 }

