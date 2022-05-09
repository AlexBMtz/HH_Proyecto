import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) 
  {

  }

  getUsers()
  {
    return this.http.get('http://localhost:5000/api/users')
  }

  getUser(UserId:string)
  {
    return this.http.get('http://localhost:5000/api/users/'+UserId);
  }

  saveUser(user : User)
   {
    return this.http.post('http://localhost:5000/api/users/',user);
   }

   deleteUser(UserId:string)
   {
    return this.http.delete('http://localhost:5000/api/users/'+UserId);
   }

   updateUser(UserId:string | number, user:User):Observable<User>
   {
     return this.http.put('http://localhost:5000/api/users/'+UserId,user);
   }
}
