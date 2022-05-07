import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coordinator } from '../models/Coordinator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorsService {

  constructor(private Http:HttpClient) { }

  getCoordinators()
  {
    return this.Http.get('http://localhost:5000/api/coordinators')
  }

  getCoordinator(coordinatoId:string)
  {
    return this.Http.get('http://localhost:5000/api/coordiantors/'+coordinatoId);
  }

  saveCoordinator(coordinator : Coordinator)
  {
    return this.Http.post('http://localhost:5000/api/coordinators/',coordinator);
  }

  deleteCoordinator(coordinatoId:string)
   {
    return this.Http.delete('http://localhost:5000/api/coordinators/'+coordinatoId);
   }

   updateCoordinator(coordinatoId:string | number, coordinator:Coordinator):Observable<Coordinator>
   {
     return this.Http.put('http://localhost:5000/api/coordinators/'+coordinatoId,coordinator);
   }
}
