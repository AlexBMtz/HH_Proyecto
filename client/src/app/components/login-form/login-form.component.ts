import { Component, OnInit,HostBinding } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
@HostBinding('class') classes = 'row';
login : Login =
{
  email : '',
  password : 0
}
edit:boolean = false;
  constructor(private router: Router,private activatedRoute : ActivatedRoute, private usersService : UsersService) 
  {

  }

  ngOnInit(): void 
  {
  }

  Login()
  {
    const user = this.usersService.login(this.login.email!,this.login.password!).subscribe
    (
    res => 
    {
      console.log(JSON.stringify(res));
      //console.log(res)
      
      //.substring(1,10) 
      //Cambiar por params = this.activatedroute.snapshot.params gracias Edwin
      if(JSON.stringify(res)[9] == "1")  //
      {
        
              this.router.navigate(['/'])
        
      }
      else
      {
        alert("Usuario y/o contraseña incorrecta")
        this.router.navigate(['/login'])
      }
    },
    err =>console.error(err)
    );
    console.log(user)
  }

}
