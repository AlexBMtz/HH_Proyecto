import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Period } from '../models/Periods';

@Injectable({
  providedIn: 'root'
})
export class PeriodsService {

  constructor(private Http:HttpClient) 
  { 

  }


  getPeriods()
  {
    return this.Http.get('http://localhost:5000/api/periods')
  }

  getPeriod(periodId:string)
  {
    return this.Http.get('http://localhost:5000/api/periods/'+periodId);
  }

  savePeriod(period:Period)
  {
    return this.Http.post('http://localhost:5000/api/periods/',period);
  }

  deletePeriod(periodId:string)
  {
    return this.Http.delete('http://localhost:5000/api/periods/'+periodId);
  }

  updatePeriod(periodId:string|number, period:Period):Observable<Period>
  {
    return this.Http.put('http://localhost:5000/api/periods/'+periodId,period);
  }

}
