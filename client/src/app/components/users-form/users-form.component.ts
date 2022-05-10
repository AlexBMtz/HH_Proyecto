import { Component, OnInit,HostBinding, Host } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';
import { Router,ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { Student } from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
@HostBinding('class') classes = 'row';
  user: User=
  {
    email:'',
    roleId:0,
    password:''
  }
  student : Student =
  {
    admissionDate: new Date(),
    studentId:0,
    email: '',
    fatherLastName : '',
    firstName : '',
    motherLastName:'',
    phoneNumber: '',
    photourl:''
  }
  edit:boolean = false;

  constructor(private userService: UsersService, private router:Router, 
    private studentService: StudentsService, private activatedRoute : ActivatedRoute,
    private loginService : LoginService) 
  { 

  }

  ngOnInit(): void 
  {
    var role = this.loginService.getCookie()
    if(role == '4'){
      const params = this.activatedRoute.snapshot.params;
      //console.log(params)
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
    else{
      alert("No tienes permisos para acceder a este apartado.")
      this.router.navigate(['/'])
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
    this.userService.updateUser(this.user.email!,this.user).subscribe
    (
      res=>
      {
        console.log(res);
        this.router.navigate
      }
    )
  }

}
