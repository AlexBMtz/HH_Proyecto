import { Component, OnInit,HostBinding } from '@angular/core';
import { CoordinatorsService } from 'src/app/services/coordinators.service';
import { Coordinator } from 'src/app/models/Coordinator';
import { ActivatedRoute,Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

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
email : any = null;
exists : boolean = false;


  constructor(private coordinatorsService:CoordinatorsService, private usersService:UsersService, private router:Router,private activatedRoute:ActivatedRoute) 
  {

  }

  ngOnInit(): void 
  {
    const params=this.activatedRoute.snapshot.params;
    console.log(params)
    if(params['coordinatorId'])
    {
      this.coordinatorsService.getCoordinator(params['coordinatorId']).subscribe
      (
        res => 
        {
          console.log(res)
          this.coordinator=res;
          this.edit=true;
        },
        err => console.error(err)
      );
    }
    this.filluser();
  }

  saveNewCoordinator()
  {
    // delete this.coordinator.coordinatorId;
    // this.coordinatorsService.saveCoordinator(this.coordinator).subscribe(
    // res =>{
    //         console.log(this.coordinator)
    //         console.log(res);
    //         },
    //         err => console.error(err)
    // );
    
    // this.user.email=this.coordinator.email;
    // this.usersService.saveUser(this.user).subscribe(
    //   res =>{
    //     console.log(this.coordinator)
    //     console.log(res);
    //     this.router.navigate(['/coordinators']);
    //     },
    //     err => console.error(err)
    // );

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
      this.coordinatorsService.saveCoordinator(this.coordinator).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/coordinators', this.email]);
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
          delete this.coordinator.coordinatorId;
           this.coordinator.email = this.email;
      
    
    }
    else{
      alert("No puedes registrar un nuevo usuario con ese correo.")
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
