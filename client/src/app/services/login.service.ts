import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookies : CookieService) { }

  login(email: string)
  {
    return this.http.get("http://localhost:5000/api/login/"+email);
  }

  setCookie(Id: string) {
    this.cookies.set("roleId", Id);
  }
  getCookie() {
    return this.cookies.get("roleId");
  }
}
