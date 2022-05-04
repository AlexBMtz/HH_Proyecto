import { Component, OnInit,HostBinding, Host } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';
import { Router,ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { Student } from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
@HostBinding('class') classes = 'row';
  user: User=
  {
    UserId:0,
    firstName: '',
    fatherLastName:'',
    motherLastName:'',
    email:'',
    phoneNumber:'',
    roleId:1
  }
  student : Student =
  {
    admissionDate: new Date(),
    studentId:0,
    userId:0
  }
  edit:boolean = false;

  constructor(private userService: UsersService, private router:Router, private studentService: StudentsService, private activatedRoute : ActivatedRoute) 
  { 

  }

  ngOnInit(): void 
  {
    const params = this.activatedRoute.snapshot.params;
   // console.log(params)
    if(params['studentId']) 
    {
      this.userService.getUser(params['userId']).subscribe
      (
        res => 
        {
          console.log(res); 
          this.user=res;
          this.edit=true;
        },
        err =>console.error(err)
      );
    }
  }

  saveNewUser()
  {
    this.userService.saveUser(this.user).subscribe
    (res=>
      {
        console.log(res);
        this.router.navigate(['/users'])},
        err=>console.error(err)
      );
      
  }

  updateUser()
  {
    this.userService.updateUser(this.user.UserId!,this.user).subscribe
    (
      res=>
      {
        console.log(res);
        this.router.navigate
      }
    )
  }

}
