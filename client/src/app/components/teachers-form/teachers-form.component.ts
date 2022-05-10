import { Component, HostBinding, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { User } from 'src/app/models/User';
import { TeachersService } from 'src/app/services/teachers.service';
import { Router, ActivatedRoute} from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from 'src/app/services/login.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css']
})
export class TeachersFormComponent implements OnInit {
  //Necesario para mostrar los divs de forma organizada
  @HostBinding('class') classes='row';
  user:User=
{
  email:'',
  roleId:2,
  password:'12345'
};

teacher:Teacher=
{
  teacherId:0,
  firstName:'',
  fatherLastName:'',
  motherLastName:'',
  email:'',
  phoneNumber:'',
  photourl:'',
  rfc:'',
  hiringDate:new Date
}

edit:boolean=false;

users : any = [];
register : any = [];
exists : boolean = false;
dateString : any;

  constructor(private teachersService:TeachersService, 
    private usersService:UsersService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private loginService : LoginService,
    @Inject(LOCALE_ID) private locale:string)
    { 
    }

  ngOnInit(): void {
    var role = this.loginService.getCookie()
    if(role == '3'){
      const params=this.activatedRoute.snapshot.params;
      if(params['teacherId'])
      {
        this.teachersService.getTeacher(params['teacherId']).subscribe
        (
          res => 
          {
            console.log(res)
            this.teacher=res;
            this.edit = true;

            this.dateString = formatDate(this.teacher.hiringDate!, 'yyyy-MM-dd', this.locale)
            console.log(this.dateString)
          },
          err => console.error(err)
        );
      }
      this.filluser();
    }
    else{
      alert("No tienes permisos para acceder a este apartado.")
      this.router.navigate(['/'])
    }
    
  }

  saveNewTeacher()
  {
    if(this.teacher.email != '' && this.teacher.fatherLastName != '' && this.teacher.firstName != '' && 
    this.teacher.motherLastName != '' && this.teacher.phoneNumber != '' && this.teacher.rfc != ''){
      console.log(this.teacher);
      for (let i = 0; i < this.register.length; i++) {
        if (this.register[i].email == this.teacher.email) {
          this.exists = true;
          break;
        }
        else{
          this.exists = false;
        }
      }

      if(!this.exists){
        delete this.teacher.teacherId;

        if(this.teacher.photourl == ''){
          this.teacher.photourl = '/assets/NoImage.jpg'
        }

        this.teachersService.saveTeacher(this.teacher).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/teachers']);
          },
          err => console.error(err)
        );

          this.user.email=this.teacher.email;
          this.usersService.saveUser(this.user).subscribe(res=>{
          console.log(this.teacher)
          console.log(res);
          this.router.navigate(['/teachers'])
        },
        err => console.error(err)
        );
      }
      else{
        alert("No puedes registrar un nuevo usuario con ese correo.")
      }
    }
    else{
      alert("Por favor completa todos los registros.")
    }
  }
  

  updateTeacher(){
    //console.log(this.teacher);
    //! -->Utilizado cuando se pueden esperar distintos tipos de un dato
  
    this.teachersService.updateTeacher(this.teacher.teacherId!,this.teacher).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/teachers']);
      },
      err => console.error(err)
    );
  }

  filluser()
  {
    this.usersService.getUsers().
    subscribe(
      res => {
        this.register = res;
        console.log(res)
      },
      err => console.error(err)
    )
  }

}


