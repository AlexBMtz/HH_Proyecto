import { Component, OnInit, Inject, LOCALE_ID, HostBinding } from '@angular/core';
import { CoordinatorsService } from 'src/app/services/coordinators.service';
import { Coordinator } from 'src/app/models/Coordinator';
import { ActivatedRoute,Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-coordinators-form',
  templateUrl: './coordinators-form.component.html',
  styleUrls: ['./coordinators-form.component.css']
})
export class CoordinatorsFormComponent implements OnInit {
@HostBinding ('class') classes = 'row';
user:User=
{
  email:'',
  roleId:3,
  password:'12345'
}
coordinator : Coordinator=
{
  coordinatorId:0,
  firstName: '',
  fatherLastName:'',
  motherLastName:'',
  email:'',
  hiringDate: new Date(),
  phoneNumber:'',
  photourl:'',
  rfc:'',
};
edit:boolean=false;

users : any = [];
register : any = [];
exists : boolean = false;
dateString : any;

  constructor(private coordinatorsService:CoordinatorsService, 
    private usersService:UsersService, private router:Router,
    private activatedRoute:ActivatedRoute, private loginService : LoginService,
    @Inject(LOCALE_ID) private locale:string) 
  {

  }

  ngOnInit(): void 
  {
    var role = this.loginService.getCookie()
    if(role == '3'){
      const params=this.activatedRoute.snapshot.params;
      console.log(params['coordinatorId'])
      if(params['coordinatorId'])
      {
        this.coordinatorsService.getCoordinator(params['coordinatorId']).subscribe
        (
          res => 
          {
            console.log(res)
            this.coordinator=res;
            this.edit=true;

            this.dateString = formatDate(this.coordinator.hiringDate!, 'yyyy-MM-dd', this.locale)
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

  saveNewCoordinator()
  {
    if(this.coordinator.email != '' && this.coordinator.fatherLastName != '' && this.coordinator.firstName != '' && 
    this.coordinator.motherLastName != '' && this.coordinator.phoneNumber != '' && this.coordinator.rfc != ''){
      console.log(this.coordinator);
    
      for (let i = 0; i < this.register.length; i++) {
        if (this.register[i].email == this.coordinator.email) {
          this.exists = true;
          break;
        }
        else{
          this.exists = false;
        }
      }
  
      if(!this.exists){
        delete this.coordinator.coordinatorId;

        if(this.coordinator.photourl == ''){
          this.coordinator.photourl = '/assets/NoImage.jpg'
        }
  
        this.coordinatorsService.saveCoordinator(this.coordinator).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/coordinators']);
          },
          err => console.error(err)
        );
  
          this.user.email=this.coordinator.email;
          this.usersService.saveUser(this.user).subscribe(res=>{
          console.log(this.coordinator)
          console.log(res);
          this.router.navigate(['/coordinators'])
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
  

  updateCoordinator(){
    //console.log(this.teacher);
    //! -->Utilizado cuando se pueden esperar distintos tipos de un dato
  
    this.coordinatorsService.updateCoordinator(this.coordinator.coordinatorId!,this.coordinator).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/coordinators']);
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
