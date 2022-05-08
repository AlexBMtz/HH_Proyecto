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


  constructor(private coordinatorsService:CoordinatorsService, private usersService:UsersService, private router:Router,private activatedRoute:ActivatedRoute) 
  {

  }

  ngOnInit(): void 
  {
    const params=this.activatedRoute.snapshot.params;
    if(params['coordinatorId'])
    {
      this.coordinatorsService.getCoordinator(params['coordinatorId']).subscribe
      (
        res => 
        {
          console.log(res)
          this.coordinator=res;
        },
        err => console.error(err)
      )
    }
    
  }

  saveNewCoordinator()
  {
    delete this.coordinator.coordinatorId;
    this.coordinatorsService.saveCoordinator(this.coordinator).subscribe(
    res =>{
            console.log(this.coordinator)
            console.log(res);
            },
            err => console.error(err)
    );
    
    this.user.email=this.coordinator.email;
    this.usersService.saveUser(this.user).subscribe(
      res =>{
        console.log(this.coordinator)
        console.log(res);
        this.router.navigate(['/coordinators']);
        },
        err => console.error(err)
    );
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

}
