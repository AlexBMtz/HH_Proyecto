import { Component, OnInit,HostBinding} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @HostBinding('classs') classes = 'row';
  users: any = {};
  roles: any={};
  constructor(private userService:UsersService) 
  {

   }

  ngOnInit(): void 
  {
    this.listUser();
  }

  listUser()
  {
    this.userService.getUsers().subscribe(res=> this.users=res,
      err=>console.error(err))
  }

  deleteUser(UserId:string)
  {
    this.userService.deleteUser(UserId).subscribe
    (
      res=>{console.log(res),
      this.listUser()},
      err=>console.error(err)
      )
  }

  editUser(UserId : string)
  {
    console.log(UserId)
  }

}
