import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frequency } from '../models/Frequency';

@Injectable({
  providedIn: 'root'
})
export class FrequenciesService {

  constructor(private Http:HttpClient) 
  {
    
  }

  getFrequencies()
  {
    return this.Http.get('http://localhost:5000/api/frequencies');
  }

  getFrequency(frequencyId:string)
  {
    return this.Http.get('http://localhost:5000/api/frequencies/'+frequencyId);
  }

  saveFrequency(frequency:Frequency)
  {
    return this.Http.post('http://localhost:5000/api/frequencies/',frequency);
  }

  deleteFrequency(frequencyId:string)
  {
    return this.Http.delete('http://localhost:5000/api/frequencies/'+frequencyId);
  }

  updateFrequency(frequencyId:string|number, frequency:Frequency):Observable<Frequency>
  {
    return this.Http.put('http://localhost:5000/api/frequencies/'+frequencyId,frequency);
  }
}