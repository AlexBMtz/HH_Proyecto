import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  roleId : any;

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.roleId = this.loginService.getCookie();

    window.setInterval( () =>{
      this.checkCookie();
    }, 500);
  }

  checkCookie() : void {

    var lastCookie = this.roleId;
    var Cookie = this.loginService.getCookie();

    if(lastCookie != Cookie){
      window.location.reload();
    }
    
    console.log(lastCookie);
  }
}
