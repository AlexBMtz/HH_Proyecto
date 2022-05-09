import { Component, HostBinding, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { User } from 'src/app/models/User';
import { TeachersService } from 'src/app/services/teachers.service';
import { Router, ActivatedRoute} from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

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
email : any = null;
exists : boolean = false;

  constructor(private teachersService:TeachersService, 
    private usersService:UsersService,
    private router:Router,
    private activatedRoute:ActivatedRoute)
    { 
    }

  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    if(params['teacherId'])
    {
      this.teachersService.getTeacher(params['teacherId']).subscribe
      (
        res => 
        {
          console.log(res)
          this.teacher=res;
        },
        err => console.error(err)
      );
    }
    this.filluser();
  }

  saveNewTeacher()
  {
    // delete this.teacher.teacherId;
    // this.teachersService.saveTeacher(this.teacher).subscribe(
    // res =>{
    //         console.log(this.teacher)
    //         console.log(res);
    //         },
    //         err => console.error(err)
    // );

    // this.user.email=this.teacher.email;
    // this.usersService.saveUser(this.user).subscribe(
    //   res =>{
    //     console.log(this.teacher)
    //     console.log(res);
    //     this.router.navigate(['/teachers']);
    //     },
    //     err => console.error(err)
    // );

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
      this.teachersService.saveTeacher(this.teacher).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/teachers', this.email]);
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
          delete this.teacher.teacherId;
           this.teacher.email = this.email;
      
    
    }
    else{
      alert("No puedes registrar un nuevo usuario con ese correo.")
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


